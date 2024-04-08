'use client';

import Link from 'next/link';
import CldImageWrapper from '../CldImageWrapper';
import {
  faSquarePlus,
  faSquareMinus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LessonDropdown from '@/components/Lesson/LessonDropdown';
import {
  bookMarkLesson,
  unBookMarkLesson,
  likeLesson,
  unLikeLesson,
} from '@/lib/lessons';
import { Lesson } from '.prisma/client';
import { addToRecent } from '@/lib/lessons';

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

export default function LessonCard({
  lesson,
  bookmarked,
  liked,
}: {
  lesson: Lesson;
  bookmarked: boolean;
  liked: boolean;
}) {
  const likes = lesson.likedByIDs.length;
  const handleAddBookmark = async (lesson: Lesson) => {
    try {
      await bookMarkLesson(lesson.id);
    } catch (e) {
      console.log(e);
    }

    // dispatch(addBookmarked(lesson));
  };
  const handleUnBookmark = async (lesson: Lesson) => {
    try {
      await unBookMarkLesson(lesson.id);
    } catch (e) {
      console.log(e);
    }
  };
  const handleLike = async (lesson: Lesson) => {
    try {
      await likeLesson(lesson.id);
    } catch (e) {
      console.log(e);
    }
  };
  const handleUnLike = async (lesson: Lesson) => {
    try {
      await unLikeLesson(lesson.id);
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddToRecent = async (lesson: Lesson) => {
    try {
      await addToRecent(lesson.id);
    } catch (e) {
      console.log(e);
    }
  };
  //grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  return (
    <div
      // key={lesson.id}
      className='group relative col-span-1 max-h-40 min-w-[15rem] max-w-sm rounded-lg bg-white bg-blend-overlay shadow'
    >
      <button
        onClick={
          bookmarked
            ? () => handleUnBookmark(lesson)
            : () => handleAddBookmark(lesson)
        }
        className='absolute left-2 top-2 z-10 m-auto h-8 w-8 rounded-md bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'
      >
        {bookmarked ? (
          <FontAwesomeIcon
            icon={faSquareMinus}
            size='2xl'
            style={{ color: 'rgb(59 130 246)' }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faSquarePlus}
            size='2xl'
            style={{ color: 'rgb(59 130 246)' }}
          />
        )}
      </button>
      <button
        onClick={liked ? () => handleUnLike(lesson) : () => handleLike(lesson)}
        className='absolute bottom-1 right-8 z-10 m-auto h-6 w-12 rounded-full border-2 border-solid border-green-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'
      >
        {liked ? (
          <FontAwesomeIcon
            icon={farHeart}
            size='sm'
            style={{ color: 'rgb(220 38 38)' }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeart}
            size='sm'
            style={{ color: 'rgb(220 38 38)' }}
          />
        )}{' '}
        {likes}
      </button>
      <div className='flex items-stretch'>
        <Link
          href={`/lesson/${lesson.id}`}
          className='flex items-stretch'
          onClick={() => handleAddToRecent(lesson)}
        >
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
        </div>
        <LessonDropdown />
      </div>
    </div>
  );
}
