import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Lesson } from '@prisma/client';
import { db } from '@/lib/db';
import LessonList from '@/components/Lesson/LessonList';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const bookmarkedLessons: Lesson[] = [];

  const lessonIDLists = session
    ? await db.user.findFirst({
        where: {
          id: session.user.id,
        },
        select: {
          bookmarkIDs: true,
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
  }

  return (
    <div>
      <LessonList lessons={bookmarkedLessons} session={session}></LessonList>
    </div>
  );
}
