import Link from 'next/link';
import { db } from '@/lib/db';
import { Lesson } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import EmblaCarousel from '@/components/Lesson/Carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import LevelSelection from '@/components/Lesson/LevelSelection';

export default async function Home() {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' };
  const bookmarkedLessons: Lesson[] = [];
  const likedLessons: Lesson[] = [];
  const recentLessons: Lesson[] = [];

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
      <LevelSelection />
      {session ? (
        <div className='mt-4'>
          <section className='mb-4'>
            <div className='flex w-full flex-row justify-between'>
              <h1 className='ml-10 p-2 text-lg font-bold'>Recently Studied:</h1>
              <Link href='/library/recently-viewed'>
                <button>View All &gt;</button>
              </Link>
            </div>
            <EmblaCarousel
              slides={recentLessons}
              session={session}
              options={OPTIONS}
            />
          </section>
          <section className='mb-4'>
            <div className='flex w-full flex-row justify-between'>
              <h1 className='ml-10 p-2 text-lg font-bold'>Saved Lessons:</h1>
              <Link href='/library/currently-studying'>
                <button>View All &gt;</button>
              </Link>
            </div>
            <EmblaCarousel
              slides={bookmarkedLessons}
              session={session}
              options={OPTIONS}
            />
          </section>
          <section className='mb-4'>
            <div className='flex w-full flex-row justify-between'>
              <h1 className='ml-10 p-2 text-lg font-bold'>My Likes:</h1>
              <Link href='/library/liked'>
                <button>View All &gt;</button>
              </Link>
            </div>
            <EmblaCarousel
              slides={likedLessons}
              session={session}
              options={OPTIONS}
            />
          </section>
          <section className='mb-4'>
            <div className='flex w-full flex-row justify-between'>
              <h1 className='ml-10 p-2 text-lg font-bold'>Trending:</h1>
              <Link href='/library/trending'>
                <button>View All &gt;</button>
              </Link>
            </div>
            <EmblaCarousel
              slides={publicLessons}
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
