'use client';

import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface CreateDropdownMenuProps {
  getLinkClass: (path: string[]) => string;
  pathname: string;
}

export default function CreateDropdownMenu({
  getLinkClass,
  pathname,
}: CreateDropdownMenuProps) {
  return (
    <div
      className={`inline-flex items-center border-b-4 px-1 pt-1 text-lg font-medium ${getLinkClass(['/create/compose', '/create/rewrite'])}`}
    >
      <Menu as='div' className='relative inline-block text-left'>
        <Menu.Button>
          {({ open }) => (
            <>
              <OpenAIIcon
                className={`-mt-1 mr-2 inline h-5 w-5 ${['/create/compose', '/create/rewrite'].includes(pathname) ? 'fill-gray-900 hover:fill-gray-900' : 'fill-gray-500 hover:fill-gray-700'}`}
              />
              <p className='hidden lg:inline-block'>Create</p>
              <FontAwesomeIcon
                className='ml-2 hidden lg:inline-block'
                icon={faChevronUp}
                rotation={open ? undefined : 180}
                size='sm'
              />
            </>
          )}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-[-1rem] mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <Link href='/create/compose'>
                    <button
                      className={`${
                        active ? 'bg-slate-200' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <EditActiveIcon
                          className='mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                      ) : (
                        <EditInactiveIcon
                          className='mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                      )}
                      Compose
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href='/create/rewrite'>
                    <button
                      className={`${
                        active ? 'bg-slate-200' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DuplicateActiveIcon
                          className='mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                      ) : (
                        <DuplicateInactiveIcon
                          className='mr-2 h-5 w-5'
                          aria-hidden='true'
                        />
                      )}
                      Rewrite
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function OpenAIIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='#000000'
      viewBox='0 0 24 24'
      role='img'
    >
      <title>OpenAI icon</title>
      <path d='M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z' />
    </svg>
  );
}

function EditInactiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='rgb(229 231 235)'
        stroke='rgb(82 82 82)'
        strokeWidth='2'
      />
    </svg>
  );
}

function EditActiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='rgb(163 163 163)'
        stroke='rgb(82 82 82)'
        strokeWidth='2'
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 4H12V12H4V4Z'
        fill='rgb(255 255 255)'
        stroke='rgb(82 82 82)'
        strokeWidth='2'
      />
      <path
        d='M8 8H16V16H8V8Z'
        fill='rgb(115 115 115)'
        stroke='rgb(82 82 82)'
        strokeWidth='2'
      />
    </svg>
  );
}

function DuplicateActiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 4H12V12H4V4Z'
        fill='rgb(115 115 115)'
        stroke='rgb(82 82 82)'
        strokeWidth='2'
      />
      <path
        d='M8 8H16V16H8V8Z'
        fill='rgb(255 255 255)'
        stroke='rgb(82 82 82)'
        strokeWidth='2'
      />
    </svg>
  );
}
