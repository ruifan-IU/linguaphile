import { db } from '@/lib/db';
import { Lesson } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import LessonList from '@/components/Lesson/LessonList';
import LessonTabs from '@/components/Lesson/LessonTabs';

export default async function Home() {
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

  return (
    <main className='flex flex-col items-center justify-between p-5 sm:p-10'>
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
          Recent: <LessonList lessons={recentLessons} />
          Bookmarked: <LessonList lessons={bookmarkedLessons} />
          All Lessons: <LessonList lessons={lessons} />
        </>
      ) : (
        <LessonList lessons={publicLessons} />
      )}
    </main>
  );
}
