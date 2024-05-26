import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Upload from '@/components/Upload/Upload';
import { authOptions } from '@/lib/auth';

export default async function UploadLessons() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/welcome');
  }

  return (
    <div className='mx-auto my-10 flex max-w-5xl flex-col items-center bg-emerald-50 px-5'>
      <header className='my-4 text-base font-bold uppercase md:text-xl lg:text-2xl'>
        upload a lesson
      </header>
      <Upload />
    </div>
  );
}
