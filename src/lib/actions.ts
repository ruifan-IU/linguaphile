'use server';

import OpenAI from 'openai';
import { saveLesson } from './lessons';
import context from './context';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { db } from './db';

export async function uploadLesson(formData: FormData) {
  const prompt = {
    title: formData.get('title') as string,
    language: formData.get('language') as string,
    level: formData.get('level') as string,
    text: formData.get('text') as string,
  };

  await saveLesson(prompt);
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

  const level = formData.get('level') as string;

  console.log("level", level)

  const userPrompt = `Here is a reading lesson: ${lesson?.text} Please rewrite the lesson to the level of difficulty suited for ${language} language learners at ${level} level. Please include only the rewritten text in your response.`;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  console.log('Generating rewrite...')

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

  await saveLesson({
    title: `${lesson?.title} (Rewritten to ${level})`,
    level: level,
    text: newText,
    imageId: lesson?.imageId,
  });
  revalidatePath('/');
  redirect('/');
  return true;
}
