'use client';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn } from 'next-auth/react';

export default function SignInWithGithub() {
  return (
    <div className='form-control mt-5'>
      <button
        onClick={() =>
          signIn('github', {
            callbackUrl: `${window.location.origin}`,
          })
        }
        className='btn btn-secondary inline w-full text-lg'
      >
        Login with Github
        <FontAwesomeIcon icon={faGithub} className='ml-2' size='lg' />
      </button>
    </div>
  );
}
