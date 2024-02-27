'use server';

import OpenAI from 'openai';

export default async function sendPrompt(formData: FormData) {
  'use server';

  const prompt = {
    title: formData.get('title'),
    language: formData.get('language'),
    level: formData.get('level'),
    text: formData.get('text'),
  };

  const promptString = `Here is a reading lesson titled "${prompt.title}": ${prompt.text} Please rewrite the lesson to the level of difficulty suited for ${prompt.language} language learners at the ${prompt.level} level.`;
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful language teacher.' },
      { role: 'user', content: promptString },
    ],
  });
  console.log(response.choices[0].message.content);

  return true;
}
