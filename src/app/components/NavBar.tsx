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
        <Link href='/'>
          <h2 className='text-md lg:text-2l text-center md:text-xl lg:text-left'>
            Polyglot-AI
          </h2>
        </Link>
      </div>
      <div className='navbar-center flex'>
        <ul className='menu menu-horizontal space-x-4 px-10 text-lg'>
          <li>
            <Link href='/'>
              <p>
                <FontAwesomeIcon icon={faBookOpen} />
                <span className='hidden lg:ml-2 lg:inline-block'>Lessons</span>
              </p>
            </Link>
          </li>
          {session && (
            <>
              <li>
                <Link href='/dictionary'>
                  <p>
                    <FontAwesomeIcon icon={faBook} />
                    <span className='hidden lg:ml-2 lg:inline-block'>
                      Dictionary
                    </span>
                  </p>
                </Link>
              </li>
              <li>
                <Link href='/uploadLesson'>
                  <p>
                    <FontAwesomeIcon icon={faFileArrowUp} />
                    <span className='hidden lg:ml-2 lg:inline-block'>
                      Upload
                    </span>
                  </p>
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
