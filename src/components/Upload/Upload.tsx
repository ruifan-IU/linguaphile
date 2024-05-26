'use client';

import { useState } from 'react';
import UploadImage from '@/components/Upload/UploadImage';
import { uploadLesson } from '@/lib/actions';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function Upload() {
  const [imageId, setImageId] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      language: 'DEFAULT',
      level: 'DEFAULT',
      text: '',
    },
  });

  const onSubmit: SubmitHandler<{
    title: string;
    language: string;
    level: string;
    text: string;
  }> = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('language', data.language);
    formData.append('level', data.level);
    formData.append('text', data.text);
    formData.append('imageId', imageId);

    try {
      await uploadLesson(formData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className='h-full w-full py-1'>
      <form
        className='flex w-full flex-col items-center space-y-4'
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <div className='flex w-full flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <input
            type='text'
            id='title'
            placeholder='Enter title here...'
            className='block w-full flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
 sm:leading-6'
            {...register('title', { required: true })}
          />
          <div className='flex w-full items-center space-x-4'>
            <select
              defaultValue='DEFAULT'
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:leading-6'
              {...register('language', { required: true })}
            >
              <option disabled value='DEFAULT'>
                Language
              </option>
              <option value='English'>English</option>
              <option value='中文'>中文</option>
            </select>

            <select
              defaultValue='DEFAULT'
              className='block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:leading-6'
              {...register('level', { required: true })}
            >
              <option disabled value='DEFAULT'>
                Level
              </option>
              <option value='A1'>Beginner</option>
              <option value='A2'>Elementary</option>
              <option value='B1'>Lower Intermediate</option>
              <option value='B2'>Upper Intermediate</option>
              <option value='C1'>Advanced</option>
              <option value='C2'>Proficency</option>
            </select>
          </div>
        </div>
        <div className='flex w-full flex-col items-start space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          <UploadImage imageId={imageId} setImageId={setImageId} />
          <textarea
            id='text'
            placeholder='Enter text here...'
            className='block h-[20rem] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6'
            {...register('text', { required: true })}
          />
        </div>
        <button
          type='submit'
          className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Upload Lesson
        </button>
      </form>
    </main>
  );
}
