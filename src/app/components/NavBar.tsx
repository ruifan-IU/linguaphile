import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faBook,
  faFileArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';
import LogOutButton from './LogOutButton';
import Dropdown from './Dropdown';

export default async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className='navbar px-3'>
      <div className='navbar-start'>
        {/* <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
          >
            <li>
              <Link href='/'>Lessons</Link>
            </li>
            {session && (
              <>
                <li>
                  <Link href='/dictionary'>Dictionary</Link>
                </li>
                <li
                  className='tooltip tooltip-bottom'
                  data-tip='upload own lesson'
                >
                  <Link href='/uploadLesson'>Upload</Link>
                </li>
              </>
            )}
          </ul>
        </div> */}
        <Link href='/'>
          <h2 className='text-md lg:text-2l text-center md:text-xl lg:text-left'>
            Polyglot-AI
          </h2>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal space-x-4 px-10 text-lg'>
          <li>
            <Link href='/'>
              <FontAwesomeIcon icon={faBookOpen} />
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
                />
              </svg> */}
              Lessons
            </Link>
          </li>
          {session && (
            <>
              <li>
                <Link href='/dictionary'>
                  <FontAwesomeIcon icon={faBook} />
                  Dictionary
                </Link>
              </li>
              <li>
                <Link href='/uploadLesson'>
                  <FontAwesomeIcon icon={faFileArrowUp} />
                  Upload
                </Link>
              </li>
              <li>
                <Dropdown />
              </li>
            </>
          )}
        </ul>
      </div>
      <div className='navbar-end'>
        {session ? (
          <LogOutButton />
        ) : (
          <Link href='/login' className='btn btn-secondary text-xl'>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

