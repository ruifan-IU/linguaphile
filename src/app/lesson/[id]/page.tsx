import { db } from '@/lib/db';
import { LessonDisplay } from '../../components/LessonDisplay';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../utils/auth';

export default async function Lesson({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const lesson = await db.lesson.findUnique({
    where: {
      id: params.id,
    },
  });
  // find words in dictionary that are in the lesson
  const lessonWords = lesson && lesson.text.split(' ');
  const savedWords = new Set<string>();
  if (lessonWords?.length) {
    const words = await db.word.findMany({
      where: {
        phrase: { in: lessonWords },
        languageId: 'en',
        userId: session?.user.id,
      },
      select: {
        phrase: true,
      },
    });

    for (const word of words) {
      savedWords.add(word.phrase);
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
