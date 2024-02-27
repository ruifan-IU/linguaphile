import { getServerSession } from 'next-auth';
import SignInWithGithub from '../components/SignInWithGithub';
import { authOptions } from '../utils/auth';
import SignInForm from '../components/SignInForm';
import { redirect } from 'next/navigation';

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect('/');
  }

  return (
    <div className='flex h-full'>
      <div className='m-auto w-full max-w-xs rounded-box bg-base-100 bg-base-200 p-10 shadow-lg'>
        <h1 className='mb-10 text-center text-2xl font-bold'>Please sign in</h1>
        <SignInForm />
        <SignInWithGithub />
      </div>
    </div>
  );
}
