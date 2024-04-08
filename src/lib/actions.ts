'use server';

import OpenAI from 'openai';
import { rewriteLesson } from './lessons';
import context from './context';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { db } from './db';
import levelMap from './levelMap';

export async function uploadLesson(formData: FormData) {
  const prompt = {
    title: formData.get('title') as string,
    language: formData.get('language') as string,
    level: formData.get('level') as string,
    text: formData.get('text') as string,
  };


  console.log(prompt)
  await db.lesson.create({
    data: {
      title: prompt.title,
      languageId: prompt.language,
      level: levelMap[prompt.level],
      text: prompt.text,
      public: true,
      imageId: 'www.dummy.com/image.jpg',
      updated: new Date(),
    },
  });
  revalidatePath('/');
  redirect('/');
}

export async function generateRewrite(formData: FormData) {
  const lesson = await db.lesson.findFirst({
    where: {
      id: formData.get('lessonId') as string,
    },
  });

  const language = await db.language.findFirst({
    where: {
      id: lesson?.languageId,
    },
  });

  const newLevel = formData.get('level') as string;

  console.log('newLevel', newLevel);

  const userPrompt = `Here is a reading lesson: ${lesson?.text} Rewrite the lesson to the level of difficulty suited for ${language} language learners at the ${newLevel} CEFR level. Only include the rewritten text in your response.`;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  console.log('Generating rewrite...');

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: context },
      { role: 'user', content: userPrompt },
    ],
  });

  const newText = response.choices[0].message.content;

  console.log('Rewrite generated:', newText);

  if (!newText) {
    throw new Error('Failed to generate rewrite');
  }

  if (!lesson) {
    throw new Error('Lesson not found');
  }

  await rewriteLesson(lesson, newLevel, newText);

  revalidatePath('/');
  redirect('/');
  return true;
}
