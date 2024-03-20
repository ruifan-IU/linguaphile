import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import LessonList from '@/components/Lesson/LessonList';
import LessonTabs from '@/components/Lesson/LessonTabs';

export default async function Home() {
  revalidatePath('/');
  const publicLessons = await db.lesson.findMany({
    where: {
      public: true,
    },
  });

  const session = await getServerSession(authOptions);
  const bookmarked = session
    ? await db.user.findFirst({
        where: {
          id: session.user.id,
        },
        select: {
          bookmarkIDs: true,
        },
      })
    : null;

  const bookmarkedLessons = bookmarked
    ? await db.lesson.findMany({
        where: {
          id: { in: bookmarked.bookmarkIDs },
        },
      })
    : [];
  const lessons = await db.lesson.findMany();

  return (
    <main className='flex flex-col items-center justify-between p-5 sm:p-10'>
      {session ? (
        <LessonTabs lessons={lessons} bookmarked={bookmarkedLessons} />
      ) : (
        <LessonList lessons={publicLessons} />
      )}
    </main>
  );
}
