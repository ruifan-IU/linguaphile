import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { signIn } from 'next-auth/react';
import SignInWithGoogleOrGithub from '../src/app/components/SignInWithGoogleOrGithub';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

describe('SignInWithGithub', () => {
  test('renders the login button', () => {
    render(<SignInWithGoogleOrGithub />);
    const loginButton = screen.getByText('Login with Github');
    expect(loginButton).toBeInTheDocument();
  });

  test('calls signIn function with correct parameters when the button is clicked', async () => {
    render(<SignInWithGoogleOrGithub />);
    const loginButton = screen.getByText('Login with Github');
    userEvent.click(loginButton);
    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('github', {
        callbackUrl: `${window.location.origin}`,
      });
    });
  });
});
