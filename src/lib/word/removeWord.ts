'use server';

import { db } from '@/lib/db';

export async function removeWord(
  phrase: string,
  languageId: string,
  userId: string,
) {
  const wordExists = await db.word.findUnique({
    where: {
      phrase_languageId_userId: {
        phrase,
        languageId,
        userId,
      },
    },
  });

  if (!wordExists) {
    return Response.json({ error: 'Word does not exist' });
  }

  const deletedWord = await db.word.delete({
    where: {
      phrase_languageId_userId: {
        phrase,
        languageId,
        userId,
      },
    },
  });
}
