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
    const { getByLabelText } = render(<SignInForm />);
    expect(getByLabelText('Email address')).toBeInTheDocument();
  });

  it('handles input change', () => {
    const { getByLabelText } = render(<SignInForm />);
    const input: HTMLInputElement = getByLabelText(
      'Email address',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input.value).toBe('test@example.com');
  });

  it('handles form submission', async () => {
    (signIn as jest.Mock).mockResolvedValue({ ok: true });
    (toast as unknown as jest.Mock).mockImplementation(() => {});

    const { getByLabelText, getByText } = render(<SignInForm />);
    const input: HTMLInputElement = getByLabelText(
      'Email address',
    ) as HTMLInputElement;
    const button = getByText('Sign in with email');
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
