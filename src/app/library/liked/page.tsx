import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Lesson } from '@prisma/client';
import { db } from '@/lib/db';
import LessonList from '@/components/Lesson/LessonList';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const likedLessons: Lesson[] = [];

  const lessonIDLists = session
    ? await db.user.findFirst({
        where: {
          id: session.user.id,
        },
        select: {
          likedIDs: true,
        },
      })
    : null;

  if (lessonIDLists) {
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
  }

  return (
    <div>
      <LessonList lessons={likedLessons} session={session}></LessonList>
    </div>
  );
}
