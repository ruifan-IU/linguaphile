'use server';

import { revalidatePath } from 'next/cache';
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
      bookmarkIDs: [lessonId, ...bookmarkIDs],
    },
  });

  const bookmarked = await db.lesson.findFirst({
    where: {
      id: lessonId,
    },
    select: {
      bookmarkedByIDs: true,
    },
  });

  const bookmarkedByIDs = bookmarked?.bookmarkedByIDs || [];

  await db.lesson.update({
    where: {
      id: lessonId,
    },
    data: {
      bookmarkedByIDs: [session.user.id, ...bookmarkedByIDs],
    },
  });
  revalidatePath('/');
}
export async function unBookMarkLesson(lessonId: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('You must be logged in to unbookmark a lesson');
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
  const newBookmarks = bookmarkIDs.filter((id) => id !== lessonId);

  await db.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      bookmarkIDs: newBookmarks,
    },
  });

  const bookmarked = await db.lesson.findFirst({
    where: {
      id: lessonId,
    },
    select: {
      bookmarkedByIDs: true,
    },
  });

  const bookmarkedByIDs = bookmarked?.bookmarkedByIDs || [];
  const newBookedByIDs = bookmarkedByIDs.filter((id) => id !== session.user.id);

  await db.lesson.update({
    where: {
      id: lessonId,
    },
    data: {
      bookmarkedByIDs: newBookedByIDs,
    },
  });
  revalidatePath('/');
}
export async function likeLesson(lessonId: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('You must be logged in to like a lesson');
  }
  const lesson = await db.lesson.findFirst({
    where: {
      id: lessonId,
    },
    select: {
      likedByIDs: true,
    },
  });
  const likedByIDs = lesson?.likedByIDs || [];
  const newLikedByIDs = likedByIDs.filter((id) => id !== session.user.id);
  newLikedByIDs.unshift(session.user.id);

  await db.lesson.update({
    where: {
      id: lessonId,
    },
    data: {
      likedByIDs: newLikedByIDs,
    },
  });

  const prevLikes = await db.user.findFirst({
    where: {
      id: session.user.id,
    },
    select: {
      likedIDs: true,
    },
  });
  const likedIDs = prevLikes?.likedIDs || [];
  const newLikedIDs = likedIDs.filter((id) => id !== lessonId);
  newLikedIDs.unshift(lessonId);
  await db.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      likedIDs: newLikedIDs,
    },
  });

  revalidatePath('/');
}
export async function unLikeLesson(lessonId: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('You must be logged in to unlike a lesson');
  }
  const lesson = await db.lesson.findFirst({
    where: {
      id: lessonId,
    },
    select: {
      likedByIDs: true,
    },
  });
  const likedByIDs = lesson?.likedByIDs || [];
  const newLikedByIDs = likedByIDs.filter((id) => id !== session.user.id);

  await db.lesson.update({
    where: {
      id: lessonId,
    },
    data: {
      likedByIDs: newLikedByIDs,
    },
  });

  const prevLikes = await db.user.findFirst({
    where: {
      id: session.user.id,
    },
    select: {
      likedIDs: true,
    },
  });
  const likedIDs = prevLikes?.likedIDs || [];
  const newLikedIDs = likedIDs.filter((id) => id !== lessonId);

  await db.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      likedIDs: newLikedIDs,
    },
  });

  revalidatePath('/');
}

export async function addToRecent(lessonId: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error('You must be logged in to add a lesson to recent');
  }
  const prevRecents = await db.user.findFirst({
    where: {
      id: session.user.id,
    },
    select: {
      recentLessonIDs: true,
    },
  });
  const recentIDs = prevRecents?.recentLessonIDs || [];
  const newRecentIDs = recentIDs.filter((id) => id !== lessonId);
  newRecentIDs.unshift(lessonId);

  await db.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      recentLessonIDs: newRecentIDs,
    },
  });
  revalidatePath('/');
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
