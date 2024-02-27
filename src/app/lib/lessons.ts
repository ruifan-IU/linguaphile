import { db } from './db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';

export async function saveLesson(lesson: {
  title: string;
  level: string;
  text: string;
}) {
  const session = await getServerSession(authOptions);
  console.log('user_id', session?.user.id);

  let levelInt = 0;

  switch (lesson.level) {
    case 'beginner':
      levelInt = 1;
      break;
    case 'elementary':
      levelInt = 2;
      break;
    case 'intermediate':
      levelInt = 3;
      break;
    case 'advanced':
      levelInt = 4;
      break;
    case 'mastery':
      levelInt = 5;
      break;
  }
  console.log('level', levelInt);

  await db.lesson.create({
    data: {
      title: lesson.title,
      level: levelInt,
      text: lesson.text,
      userId: session?.user.id,
    },
  });
}
