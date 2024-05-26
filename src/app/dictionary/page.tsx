import FamiliarityBar from '@/components/Lesson/LessonModal/FamiliarityBar';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Word } from '@prisma/client';
import { redirect } from 'next/navigation';

export default async function Dictionary() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/welcome');
  }

  let words: Word[] = [];

  if (session) {
    words = await db.word.findMany({
      where: {
        userId: session.user.id,
      },
    });
  }

  return (
    <div className='mx-auto my-10 flex max-w-5xl flex-col items-center'>
      <header className='my-4 text-base font-bold uppercase md:text-xl lg:text-2xl'>
        your words
      </header>
      <div className='xl:px-0 w-full px-4'>
        <div className='flow-root'>
          <div className='overflow-x-auto'>
            <div className='inline-block min-w-full px-1 py-1 align-middle'>
              <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead className='bg-slate-50'>
                    <tr>
                      <th
                        scope='col'
                        className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3'
                      >
                        Word
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Familiarity
                      </th>
                      <th
                        scope='col'
                        className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                      >
                        Translation
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    {words.map((word) => (
                      <tr key={word.id} className='even:bg-slate-50'>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3'>
                          {word.phrase}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          <FamiliarityBar word={word} />
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                          {word.translation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
