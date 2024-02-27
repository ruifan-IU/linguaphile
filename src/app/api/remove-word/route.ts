import { db } from '@/lib/db';

export async function POST(request: Request) {
  const data = await request.json();

  const wordExists = await db.word.findUnique({
    where: {
      phrase_languageId_userId: {
        phrase: data.phrase,
        languageId: 'en',
        userId: data.userId,
      },
    },
  });

  if (!wordExists) {
    return Response.json({ error: 'Word does not exist' });
  }

  const deletedWord = await db.word.delete({
    where: {
      phrase_languageId_userId: {
        phrase: data.phrase,
        languageId: 'en',
        userId: data.userId,
      },
    },
  });

  return Response.json(deletedWord);
}
