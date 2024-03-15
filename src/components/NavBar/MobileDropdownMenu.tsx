"use client";

import { Disclosure } from '@headlessui/react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

interface MobileDropdownMenuProps {
  session: Session | null;
}

export default function MobileDropdownMenu({
  session,
}: MobileDropdownMenuProps) {
  return (
    <Disclosure.Panel className='sm:hidden'>
      <div className='space-y-1 pb-3 pt-2'>
        {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
        <Disclosure.Button
          as='a'
          href='/'
          className='block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
        >
          Lessons
        </Disclosure.Button>
        <Disclosure.Button
          as='a'
          href='/dictionary'
          className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
        >
          Dictionary
        </Disclosure.Button>
        <Disclosure.Button
          as='a'
          href='/compose'
          className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
        >
          Compose
        </Disclosure.Button>
      </div>
      <div className='border-t border-gray-200 pb-3 pt-4'>
        <div className='mt-3 space-y-1'>
          <Disclosure.Button
            as='a'
            href='#'
            className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
          >
            Profile
          </Disclosure.Button>
          <Disclosure.Button
            as='a'
            href='#'
            className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
            disabled
          >
            Settings
          </Disclosure.Button>
          <Disclosure.Button
            as='a'
            href='#'
            className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
            onClick={() =>
              signOut({
                callbackUrl: `${window.location.origin}/signin`,
                redirect: true,
              })
            }
          >
            Sign out
          </Disclosure.Button>
        </div>
      </div>
    </Disclosure.Panel>
  );
}
