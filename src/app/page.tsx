import Link from 'next/link';
import { db } from '@/lib/db';
import { Lesson } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import EmblaCarousel from '@/components/Lesson/Carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import LevelSelection from '@/components/Lesson/LevelSelection';

type searchParamsType = {
  [key: string]: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: searchParamsType;
}) {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' };
  const bookmarkedLessons: Lesson[] = [];
  const likedLessons: Lesson[] = [];
  const recentLessons: Lesson[] = [];

  let minLevel = 1;
  let maxLevel = 6;

  if (searchParams.minLevel && searchParams.maxLevel) {
    minLevel = parseInt(searchParams.minLevel);
    maxLevel = parseInt(searchParams.maxLevel);
  }
  const publicLessons = await db.lesson.findMany({
    where: {
      public: true,
    },
  });

  publicLessons.sort((a, b) => {
    return b.likedByIDs.length - a.likedByIDs.length;
  });

  const session = await getServerSession(authOptions);
  const lessonIDLists = session
    ? await db.user.findFirst({
        where: {
          id: session.user.id,
        },
        select: {
          bookmarkIDs: true,
          likedIDs: true,
          recentLessonIDs: true,
        },
      })
    : null;

  if (lessonIDLists) {
    for (const lessonID of lessonIDLists.bookmarkIDs) {
      const lesson = await db.lesson.findUnique({
        where: {
          id: lessonID,
        },
      });
      if (lesson) {
        bookmarkedLessons.push(lesson);
      }
    }
    for (const lessonID of lessonIDLists.likedIDs) {
      const lesson = await db.lesson.findUnique({
        where: {
          id: lessonID,
        },
      });
      if (lesson) {
        likedLessons.push(lesson);
      }
    }
    for (const lessonID of lessonIDLists.recentLessonIDs) {
      const lesson = await db.lesson.findUnique({
        where: {
          id: lessonID,
        },
      });
      if (lesson) {
        recentLessons.push(lesson);
      }
    }
  }

  return (
    <main className='flex flex-col items-center justify-between'>
      <div className='flex w-5/6 flex-row justify-between'>
        <LevelSelection />
        <LevelSelection />
      </div>
      {session ? (
        <div className='mt-4'>
          <section className='mb-4'>
            <div className='flex w-full flex-row items-center justify-between'>
              <h1 className='ml-10 p-4 text-xl font-semibold'>
                Recently Studied:
              </h1>
              <Link className='mr-10' href='/library/recently-viewed'>
                <button className='h-10 w-24 rounded-lg text-center transition-colors duration-300 hover:bg-slate-200'>
                  View All &gt;
                </button>
              </Link>
            </div>
            <EmblaCarousel
              slides={recentLessons.filter((lesson) => {
                return lesson.level >= minLevel && lesson.level <= maxLevel;
              })}
              session={session}
              options={OPTIONS}
            />
          </section>
          <section className='mb-4'>
            <div className='flex w-full flex-row justify-between'>
              <h1 className='ml-10 p-4 text-xl font-semibold'>
                Saved Lessons:
              </h1>
              <Link className='mr-10' href='/library/currently-studying'>
                <button className='h-10 w-24 rounded-lg text-center transition-colors duration-300 hover:bg-slate-200'>
                  View All &gt;
                </button>
              </Link>
            </div>
            <EmblaCarousel
              slides={bookmarkedLessons.filter((lesson) => {
                return lesson.level >= minLevel && lesson.level <= maxLevel;
              })}
              session={session}
              options={OPTIONS}
            />
          </section>
          <section className='mb-4'>
            <div className='flex w-full flex-row justify-between'>
              <h1 className='ml-10 p-4 text-xl font-semibold'>My Likes:</h1>
              <Link className='mr-10' href='/library/liked'>
                <button className='h-10 w-24 rounded-lg text-center transition-colors duration-300 hover:bg-slate-200'>
                  View All &gt;
                </button>
              </Link>
            </div>
            <EmblaCarousel
              slides={likedLessons.filter((lesson) => {
                return lesson.level >= minLevel && lesson.level <= maxLevel;
              })}
              session={session}
              options={OPTIONS}
            />
          </section>
          <section className='mb-4'>
            <div className='flex w-full flex-row justify-between'>
              <h1 className='ml-10 p-4 text-xl font-semibold'>Trending:</h1>
              <Link className='mr-10' href='/library/trending'>
                <button className='h-10 w-24 rounded-lg text-center transition-colors duration-300 hover:bg-slate-200'>
                  View All &gt;
                </button>
              </Link>
            </div>
            <EmblaCarousel
              slides={publicLessons.filter((lesson) => {
                return lesson.level >= minLevel && lesson.level <= maxLevel;
              })}
              session={session}
              options={OPTIONS}
            />
          </section>
        </div>
      ) : (
        <p>please log in</p>
      )}
    </main>
  );
}
