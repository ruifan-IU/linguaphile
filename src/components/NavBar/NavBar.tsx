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
import logo from '@/../public/logo.png';
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
                    href='/compose'
                    className={`inline-flex items-center whitespace-nowrap border-b-4 px-1 pt-1 text-lg font-medium ${getLinkClass(['/compose'])}`}
                  >
                    <p>
                      <FontAwesomeIcon icon={faFileArrowUp} />
                      <span className='hidden lg:ml-2 lg:inline-block'>
                        Compose
                      </span>
                    </p>
                  </Link>
                </div>
              </div>

              <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                {/* Profile dropdown */}
                {session ? (
                  <div className='hidden items-center px-1 text-lg font-medium sm:inline-flex'>
                    {/* <Image
                      className='rounded-full'
                      alt={'profile'}
                      src={session.user.image}
                    ></Image> */}
                    <div className='hidden lg:inline-flex'>
                      <p className='whitespace-nowrap'>{session.user.name}</p>
                    </div>
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
              <div className='flex items-center sm:hidden'>
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
