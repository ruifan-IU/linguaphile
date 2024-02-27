'use server';

import OpenAI from 'openai';
import { saveLesson } from './lessons';

export default async function sendPrompt(formData: FormData) {
  const prompt = {
    title: formData.get('title') as string,
    language: formData.get('language') as string,
    level: formData.get('level') as string,
    text: formData.get('text') as string,
  };

  const promptString = `Here is a reading lesson: ${prompt.text} Please rewrite the lesson to the level of difficulty suited for ${prompt.language} language learners at the ${prompt.level} level.`;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful language expert.' },
      { role: 'user', content: promptString },
    ],
  });
  console.log(response.choices[0].message.content);

  saveLesson(prompt);

  return true;
}
