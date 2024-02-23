import Link from 'next/link';
import { db } from '@/lib/db';

export default async function Home() {
  console.log('here');
  const lessons = await db.lesson.findMany();
  console.log(lessons);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {lessons.map((lesson: { text: string; id: string }, index: number) => (
          <div
            key={lesson.id}
            className='p-6 bg-base-200 rounded-box shadow-lg max-w-xs max-h-40'
          >
            <h2 className='text-2xl font-bold mb-4'>Lesson {index + 1}</h2>
            <p className='line-clamp-3'>{lesson.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
