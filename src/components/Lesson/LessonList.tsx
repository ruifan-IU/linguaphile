'use client';

import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addBookmarked } from '@/slices/lessonListSlice';
import CldImageWrapper from '../CldImageWrapper';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LessonDropdown from '@/components/Lesson/LessonDropdown';
import { BookmarkSlashIcon } from '@heroicons/react/24/outline';
import { bookMarkLesson } from '@/lib/lessons';
import { Lesson } from '.prisma/client';

const levelColors: Record<number, string> = {
  1: 'bg-green-300',
  2: 'bg-green-600',
  3: 'bg-blue-200',
  4: 'bg-blue-600',
  5: 'bg-purple-300',
  6: 'bg-purple-600',
};

const levelTextColors: Record<number, string> = {
  1: 'text-black',
  2: 'text-white',
  3: 'text-black',
  4: 'text-white',
  5: 'text-black',
  6: 'text-white',
};

const levels: Record<number, string> = {
  1: 'A1',
  2: 'A2',
  3: 'B1',
  4: 'B2',
  5: 'C1',
  6: 'C2',
};

export default function LessonList({ lessons }: { lessons: Lesson[] }) {
  const dispatch = useAppDispatch();
  const handleAddBookmark = async (lesson: Lesson) => {
    await bookMarkLesson(lesson.id);
    // dispatch(addBookmarked(lesson));
  };
  return (
    <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className='relative col-span-1 max-h-40 min-w-[15rem] max-w-sm divide-y divide-gray-200 rounded-lg bg-white shadow'
        >
          <div className='flex items-stretch'>
            <Link href={`/lesson/${lesson.id}`} className='flex items-stretch'>
              <CldImageWrapper
                src={lesson.imageId}
                alt={lesson.title}
                width={500}
                height={500}
                className='h-40 w-40 flex-shrink-0 rounded-l-lg object-cover object-top'
              />
              <div className='flex flex-col gap-2 p-4'>
                <h2 className='line-clamp-1 text-xs font-medium text-gray-900'>
                  {lesson.title}
                </h2>
                <p className='line-clamp-6 text-xs font-light text-gray-700'>
                  {lesson.text}
                </p>
              </div>
            </Link>
            <div
              className={`h-12 min-w-4 rounded-bl-md rounded-tr-lg border-b-2 border-black pt-2 ${levelColors[lesson.level]}`}
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
              <button
                onClick={() => handleAddBookmark(lesson)}
                className='mt-2'
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ color: '#FFD43B' }}
                />
              </button>
            </div>
            <LessonDropdown />
          </div>
        </div>
      ))}
    </div>
  );
}
