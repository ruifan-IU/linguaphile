import Link from 'next/link';
import { db } from '@/lib/db';

export default async function Home() {
  const lessons = await db.lesson.findMany();

  return (
    <main className='flex flex-col items-center justify-between p-10'>
      <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {lessons.map((lesson: { text: string; id: string; title: string }) => (
          <Link
            key={lesson.id}
            className='max-h-40 max-w-xs rounded-box bg-base-200 p-6 shadow-lg'
            href={`/lesson/${lesson.id}`}
          >
            <h2 className='mb-4 line-clamp-1 text-xl font-bold'>
              {lesson.title}
            </h2>
            <p className='line-clamp-3'>{lesson.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
