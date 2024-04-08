'use server';

import { revalidatePath } from 'next/cache';
import { db } from './db';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth';
import { Lesson } from '@prisma/client';
import levelMap from './levelMap';

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
      bookmarkedByIDs: [...bookmarkedByIDs, session.user.id],
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

export async function rewriteLesson(
  lesson: Lesson,
  newLevel: string,
  newText: string,
) {
  const session = await getServerSession(authOptions);

  const lessonData = await db.lesson.findFirst({
    where: {
      title: lesson.title,
    },
  });

  if (lessonData) {
    try {
      await db.lesson.create({
        data: {
          title: lesson.title + ' (Rewrite)' + newLevel,
          level: levelMap[newLevel],
          text: newText,
          userId: session?.user.id,
          imageId: lesson.imageId,
          public: false,
          updated: new Date(),
          languageId: 'en',
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
  return true;
}
