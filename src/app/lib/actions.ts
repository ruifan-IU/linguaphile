'use server';

import OpenAI from 'openai';
import { saveLesson } from './lessons';
import context from './context';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default async function generateRewrite(formData: FormData) {
  const prompt = {
    title: formData.get('title') as string,
    language: formData.get('language') as string,
    level: formData.get('level') as string,
    text: formData.get('text') as string,
  };

  const userPrompt = `Here is a reading lesson: ${prompt.text} Please rewrite the lesson to the level of difficulty suited for ${prompt.language} language learners at ${prompt.level} level. Please include only the rewritten text in your response.`;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: context },
      { role: 'user', content: userPrompt },
    ],
  });

  const newText = response.choices[0].message.content;

  if (newText) prompt.text = newText;

  await saveLesson(prompt);
  revalidatePath('/');
  redirect('/');
  return true;
}
