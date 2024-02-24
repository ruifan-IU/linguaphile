import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';
import LogOutButton from './LogOutButton';

export default async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className='navbar bg-base-100 px-3'>
      <div className='navbar-start'>
        <div className='dropdown'>
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
                <li>
                  <Link href='/generate'>Generate</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <h2 className='text-center text-2xl lg:text-left'>Linguaphile</h2>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal space-x-4 px-10 text-lg'>
          <li>
            <Link href='/'>Lessons</Link>
          </li>
          {session && (
            <>
              <li>
                <Link href='/dictionary'>Dictionary</Link>
              </li>
              <li>
                <Link href='/generate'>Generate</Link>
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
