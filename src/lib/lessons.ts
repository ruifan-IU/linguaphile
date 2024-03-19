'use server';
import { db } from './db';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth';

export async function getLessons() {
  const lessons = await db.lesson.findMany();
  return lessons;
}
export async function bookMarkLesson(lessonId: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('You must be logged in to bookmark a lesson');
  }
  const prevBookmarks = await db.user.findFirst({
    where: {
      id: session.user.id,
    },
    select: {
      bookmarkIDs: true,
    },
  });
  const bookmarkIDs = prevBookmarks?.bookmarkIDs || [];

  await db.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      bookmarkIDs: [...bookmarkIDs, lessonId],
    },
  });
}
export async function saveLesson(lesson: {
  title: string;
  level: string;
  text: string;
}) {
  const session = await getServerSession(authOptions);

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
      break;
    case 'C2':
      levelInt = 6;
      break;
  }

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
        imageId: 'imageId',
        public: false,
        updated: new Date(),
        languageId: 'en',
      },
    });
  }
  return true;
}
