'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faBook,
  faFileArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../../../../../public/logo.png';
import DesktopDropdown from './DesktopDropdownMenu';
import MobileDropdownMenu from './MobileDropdownMenu';
import { usePathname } from 'next/navigation';
import CreateDropdownMenu from './CreateDropdownMenu';
import { Session } from 'next-auth';

interface NavBarProps {
  session: Session | null;
}

export default function NavBar({ session }: NavBarProps) {
  const pathname = usePathname();
  console.log(session);

  const getLinkClass = (paths: string[]) => {
    return paths.includes(pathname)
      ? 'border-indigo-500 text-gray-900 [&_svg]:fill-gray-900'
      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 [&_svg]:fill-gray-500 [&_svg]:hover:fill-gray-700';
  };

  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-0 sm:px-6 lg:px-8'>
            <div className='flex h-20 justify-between'>
              <div className='flex'>
                <Image
                  src={logo}
                  alt='logo'
                  width={325}
                  className='h-auto w-auto'
                  priority={true}
                />
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  <Link
                    href='/'
                    className={`inline-flex items-center whitespace-nowrap border-b-4 px-1 pt-1 text-lg font-medium ${getLinkClass(['/'])}`}
                  >
                    <p>
                      <FontAwesomeIcon icon={faBookOpen} />
                      <span className='hidden lg:ml-2 lg:inline-block'>
                        Lessons
                      </span>
                    </p>
                  </Link>
                  <Link
                    href='/dictionary'
                    className={`inline-flex items-center whitespace-nowrap border-b-4 px-1 pt-1 text-lg font-medium ${getLinkClass(['/dictionary'])}`}
                  >
                    <p>
                      <FontAwesomeIcon icon={faBook} />
                      <span className='hidden lg:ml-2 lg:inline-block'>
                        Dictionary
                      </span>
                    </p>
                  </Link>
                  <Link
                    href='/upload-lesson'
                    className={`inline-flex items-center whitespace-nowrap border-b-4 px-1 pt-1 text-lg font-medium ${getLinkClass(['/upload-lesson'])}`}
                  >
                    <p>
                      <FontAwesomeIcon icon={faFileArrowUp} />
                      <span className='hidden lg:ml-2 lg:inline-block'>
                        Upload
                      </span>
                    </p>
                  </Link>
                  <CreateDropdownMenu
                    getLinkClass={getLinkClass}
                    pathname={pathname}
                  />
                </div>
              </div>

              <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                {/* Profile dropdown */}
                {session ? (
                  <div className='hidden items-center px-1 text-lg font-medium lg:inline-flex'>
                    <p className='whitespace-nowrap'>{`Hello, ${session.user.name.split(' ')[0]}!`}</p>
                    {/* <img src={session.user.image}></img> */}
                    <DesktopDropdown />
                  </div>
                ) : (
                  <Link
                    href='/signin'
                    className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Sign in
                  </Link>
                )}
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <MobileDropdownMenu session={session} />
        </>
      )}
    </Disclosure>
  );
}
