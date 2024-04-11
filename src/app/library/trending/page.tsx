import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Lesson } from '@prisma/client';
import { db } from '@/lib/db';
import LessonList from '@/components/Lesson/LessonList';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const publicLessons = await db.lesson.findMany({
    where: {
      public: true,
    },
  });

  publicLessons.sort((a, b) => {
    return b.likedByIDs.length - a.likedByIDs.length;
  });

  return (
    <div>
      <LessonList lessons={publicLessons} session={session}></LessonList>
    </div>
  );
}
