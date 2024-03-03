import Link from 'next/link';
import { db } from '@/lib/db';

const levelColors: Record<number, string> = {
  1: 'bg-slate-50',
  2: 'bg-slate-200',
  3: 'bg-slate-300',
  4: 'bg-slate-500',
  5: 'bg-slate-700',
  6: 'bg-slate-900',
};

const levelTextColors: Record<number, string> = {
  1: 'text-slate-900',
  2: 'text-slate-900',
  3: 'text-slate-900',
  4: 'text-slate-900',
  5: 'text-slate-50',
  6: 'text-slate-50',
};

const levels: Record<number, string> = {
  1: 'A1',
  2: 'A2',
  3: 'B1',
  4: 'B2',
  5: 'C1',
  6: 'C2',
};

export default async function Home() {
  const lessons = await db.lesson.findMany();

  return (
    <main className='flex flex-col items-center justify-between p-10'>
      <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            className='max-h-40 max-w-xs rounded-box bg-base-300 shadow-lg'
            href={`/lesson/${lesson.id}`}
          >
            <div className='flex items-start'>
              <div className='flex flex-col gap-2 p-4'>
                <h2 className='line-clamp-1 text-xl font-bold'>
                  {lesson.title}
                </h2>
                <p className='line-clamp-3'>{lesson.text}</p>
              </div>
              <div
                className={`h-12 min-w-4 rounded-bl rounded-tr border-b-2 border-y-blue-700 pt-2 ${levelColors[lesson.level]}`}
              >
                <div
                  style={{
                    textOrientation: 'upright',
                    writingMode: 'vertical-rl',
                  }}
                  className={`text-xs font-bold ${levelTextColors[lesson.level]}`}
                >
                  {levels[lesson.level]}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
