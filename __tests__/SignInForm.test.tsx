import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { signIn } from 'next-auth/react';
import SignInForm from '../src/app/components/SignInForm';
import { toast } from 'react-toastify';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));
jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

describe('SignInForm', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<SignInForm />);
    expect(getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  it('handles input change', () => {
    const { getByPlaceholderText } = render(<SignInForm />);
    const input: HTMLInputElement = getByPlaceholderText(
      'Enter your email',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input.value).toBe('test@example.com');
  });

  it('handles form submission', async () => {
    (signIn as jest.Mock).mockResolvedValue({ ok: true });
    (toast as unknown as jest.Mock).mockImplementation(() => {});

    const { getByPlaceholderText, getByText } = render(<SignInForm />);
    const input = getByPlaceholderText('Enter your email');
    const button = getByText('Login with email');

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    userEvent.click(button);

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('email', {
        email: 'test@example.com',
        callbackUrl: expect.any(String),
        redirect: false,
      });
    });
  });
});
