import { getServerSession } from 'next-auth';
import SignInWithGithub from '@/components/SignInWithGoogleOrGithub';
import { authOptions } from '@/lib/auth';
import SignInForm from '@/components/SignInForm';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/');
  }

  return (
    <div className='flex h-full items-center justify-center'>
      <div className='w-50 box mx-5 rounded-lg bg-white p-10 shadow'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <SignInForm />
        <SignInWithGithub />
      </div>
    </div>
  );
}
