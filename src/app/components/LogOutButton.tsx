'use client';

import { signOut } from 'next-auth/react';

export default function LogOutButton() {
  return (
    <button
      onClick={() =>
        signOut({ callbackUrl: `${window.location.origin}/login` })
      }
      className='btn btn-primary text-lg'
    >
      Log out
    </button>
  );
}
