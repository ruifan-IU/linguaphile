'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SignInForm() {
  const [email, setEmail] = useState<string>('');

  async function SignInWithEmail() {
    const signInResult = await signIn('email', {
      email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signInResult?.ok) {
      return toast('Failed to send email!');
    }

    return toast('Email sent! Check your inbox for the magic link.');
  }

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center'>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Log in with email
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
