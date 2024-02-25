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

  if (wordExists) {
    return Response.json({ error: 'Word already exists' });
  }

  const newWord = await db.word.create({
    data: {
      phrase: data.phrase,
      translation: data.translation,
      languageId: 'en',
      userId: data.userId,
    },
  });

  return Response.json(newWord);
}
