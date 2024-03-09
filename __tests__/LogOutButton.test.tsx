import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { signOut } from 'next-auth/react';
import LogOutButton from '../src/app/components/LogOutButton';

jest.mock('next-auth/react', () => ({
  signOut: jest.fn(),
}));

describe('LogOutButton', () => {
  test('calls signOut function with correct parameters when the button is clicked', async () => {
    render(<LogOutButton />);
    const logoutButton = screen.getByText('Log out');
    userEvent.click(logoutButton);
    await waitFor(() => {
      expect(signOut).toHaveBeenCalledWith({
        callbackUrl: `${window.location.origin}/login`,
      });
    });
  });
});
