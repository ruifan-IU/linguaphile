import { db } from '@/lib/db';
import { Lesson } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import LessonList from '@/components/Lesson/LessonList';
import LessonTabs from '@/components/Lesson/LessonTabs';
import EmblaCarousel from '@/components/Lesson/carousel/Carousel';
import { EmblaOptionsType } from 'embla-carousel';

export default async function Home() {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' };
  const bookmarkedLessons: Lesson[] = [];
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

  const lessons = await db.lesson.findMany();
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
        <>
          Recent:{' '}
          <EmblaCarousel
            slides={recentLessons}
            session={session}
            options={OPTIONS}
          />
          Bookmarked:{' '}
          <EmblaCarousel
            slides={bookmarkedLessons}
            session={session}
            options={OPTIONS}
          />
          All Lessons:{' '}
          <EmblaCarousel slides={lessons} session={session} options={OPTIONS} />
        </>
      ) : (
        <LessonList lessons={publicLessons} />
      )}
    </main>
  );
}
