import { db } from '@/lib/db';
import { LessonDisplay } from '@/components/Lesson/LessonDisplay';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Word } from '@prisma/client';
import { redirect } from 'next/navigation';

export default async function Lesson({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/welcome');
  }

  const lesson = await db.lesson.findUnique({
    where: {
      id: params.id,
    },
  });

  // find words in dictionary that are in the lesson
  const lessonWords = lesson && lesson.text.split(' ');
  const savedWords: { [key: string]: Word } = {};
  if (lessonWords?.length) {
    const words = await db.word.findMany({
      where: {
        phrase: { in: lessonWords },
        languageId: 'en',
        userId: session?.user.id,
      },
    });

    for (const word of words) {
      savedWords[word.phrase] = word;
    }
  }

  return lesson ? (
    <LessonDisplay
      text={lesson.text}
      session={session}
      savedWords={savedWords}
    />
  ) : (
    <div>
      <h1>Lesson not found</h1>
    </div>
  );
}
