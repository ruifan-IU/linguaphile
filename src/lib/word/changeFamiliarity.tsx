'use server';

import { db } from '@/lib/db';

const handleStarClick = async (
  familiarity: number,
  phrase: string,
  languageId: string,
  userId: string,
) => {
  await db.word.update({
    where: {
      phrase_languageId_userId: { phrase, languageId, userId },
    },
    data: { familiarity },
  });
};

export default handleStarClick;
