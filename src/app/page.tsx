import Link from 'next/link';
import { db } from '@/lib/db';
import { Lesson } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import LessonList from '@/components/Lesson/LessonList';
import LessonTabs from '@/components/Lesson/LessonTabs';
import EmblaCarousel from '@/components/Lesson/Carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

export default async function Home() {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' };
  const bookmarkedLessons: Lesson[] = [];
  const likedLessons: Lesson[] = [];
  const recentLessons: Lesson[] = [];
  // revalidatePath('/');
  const publicLessons = await db.lesson.findMany({
    where: {
      public: true,
    },
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

  //className='flex flex-col items-center justify-between p-5 sm:p-10'
  return (
    <main className='flex flex-col items-center justify-between'>
      {/* {session ? (
        <LessonTabs
          lessons={lessons}
          bookmarked={bookmarkedLessons}
          recentLessons={recentLessons}
        />
      ) : (
        <LessonList lessons={publicLessons} />
      )} */}
      {session ? (
        <div className='mt-4'>
          <section>
            <div className='flex w-full flex-row justify-between'>
              <h1 className='ml-10 p-2 text-lg font-bold'>Recently Viewed:</h1>
              <Link href='/library/recently-viewed'>
                <button>View All</button>
              </Link>
            </div>
            <EmblaCarousel
              slides={recentLessons}
              session={session}
              options={OPTIONS}
            />
          </section>
          <section>
            <h1 className='ml-10 p-2 text-lg font-bold'>Currently Studying:</h1>
            <EmblaCarousel
              slides={bookmarkedLessons}
              session={session}
              options={OPTIONS}
            />
          </section>
          <section>
            <h1 className='ml-10 p-2 text-lg font-bold'>Liked Lessons:</h1>
            <EmblaCarousel
              slides={likedLessons}
              session={session}
              options={OPTIONS}
            />
          </section>
          <section>
            <h1 className='ml-10 p-2 text-lg font-bold'>All Public Lessons:</h1>
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
