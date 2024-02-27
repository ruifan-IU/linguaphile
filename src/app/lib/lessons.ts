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
    case 'A1':
      levelInt = 1;
      break;
    case 'A2':
      levelInt = 2;
      break;
    case 'B1':
      levelInt = 3;
      break;
    case 'B2':
      levelInt = 4;
      break;
    case 'C1':
      levelInt = 5;
    case 'C2':
      levelInt = 6;
      break;
  }
  console.log('level', levelInt);

  const lessonData = await db.lesson.findFirst({
    where: {
      title: lesson.title,
    },
  });

  if (lessonData) {
    await db.lesson.update({
      where: {
        id: lessonData.id,
      },
      data: {
        title: lesson.title,
        level: levelInt,
        text: lesson.text,
        userId: session?.user.id,
      },
    });
  } else {
    await db.lesson.create({
      data: {
        title: lesson.title,
        level: levelInt,
        text: lesson.text,
        userId: session?.user.id,
      },
    });
  }
  return true;
}
