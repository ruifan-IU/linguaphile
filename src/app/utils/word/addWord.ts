"use server"

import { db } from '@/lib/db';

export async function addWord(
  phrase: string,
  translation: string,
  languageId: string,
  userId: string,
) {
  const wordExists = await db.word.findUnique({
    where: {
      phrase_languageId_userId: { phrase, languageId, userId },
    },
  });

  if (wordExists) {
    return Response.json({ error: 'Word already exists' });
  }

  const newWord = await db.word.create({
    data: {
      phrase,
      translation,
      languageId,
      userId,
      familiarity: 0,
    },
  });

  return Response.json(newWord);
}
