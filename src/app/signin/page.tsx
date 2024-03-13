import { getServerSession } from 'next-auth';
import SignInWithGithub from '../components/SignInWithGoogleOrGithub';
import { authOptions } from '../utils/auth';
import SignInForm from '../components/SignInForm';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/');
  }

  return (
    <div className='flex h-full items-center justify-center'>
      <div className='w-50 box mx-5 rounded-lg bg-white p-6 shadow'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <SignInForm />
        <SignInWithGithub />
        <div className='my-10 text-center text-sm text-gray-500'>
          <p>Not a member?</p>
          <a
            href='#'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Start a 14 day free trial
          </a>
        </div>
      </div>
    </div>
  );
}
