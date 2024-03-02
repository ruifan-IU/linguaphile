'use client';

import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Dropdown() {
  return (
    <div className='text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button>
            {({ open }) => (
              <>
                Create
                <FontAwesomeIcon
                  className='-mr-1 ml-2'
                  icon={faChevronUp}
                  rotation={open ? undefined : 180}
                  size='sm'
                />
              </>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-[-1rem] mt-2 w-56 origin-top-right rounded-md bg-base-200 shadow-lg ring-1 ring-black/5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <Link href='/create/compose'>
                    <button
                      className={`${
                        active
                          ? 'bg-neutral-200 text-neutral-600'
                          : 'text-gray-900'
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
                        active
                          ? 'bg-neutral-200 text-neutral-600'
                          : 'text-gray-900'
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
