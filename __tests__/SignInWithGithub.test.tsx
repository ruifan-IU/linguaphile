import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { signIn } from 'next-auth/react';
import SignInWithGithub from '../src/app/components/SignInWithGithub';

describe('SignInWithGithub', () => {
  test('renders the login button', () => {
    render(<SignInWithGithub />);
    const loginButton = screen.getByText('Login with Github');
    expect(loginButton).toBeInTheDocument();
  });

  // test('calls signIn function with correct parameters when the button is clicked', () => {
  //   const signInMock = jest.fn();
  //   jest.mock('next-auth/react', () => ({
  //     signIn: signInMock,
  //   }));

  //   render(<SignInWithGithub />);
  //   const loginButton = screen.getByText('Login with Github');
  //   fireEvent.click(loginButton);

  //   expect(signIn).toHaveBeenCalledWith('github', {
  //     callbackUrl: `${window.location.origin}`,
  //   });
  // });
});
