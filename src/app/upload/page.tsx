import { uploadLesson } from '@/lib/actions';

export default function UploadLesson() {
  return (
    <div className='mx-auto my-10 flex max-w-5xl flex-col items-center bg-emerald-50 px-1'>
      <header className='my-4 text-base font-bold uppercase md:text-xl lg:text-2xl'>
        upload a lesson
      </header>
      <main className='h-full w-full py-1'>
        <form
          className='flex w-full flex-col items-center space-y-4'
          action={uploadLesson}
        >
          <div className='flex w-full flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Enter title here...'
              className='block w-full flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
 sm:text-sm sm:leading-6'
            />
            <div className='flex w-full items-center space-x-4'>
              <select
                name='language'
                defaultValue='DEFAULT'
                className='block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
              >
                <option disabled value='DEFAULT'>
                  Language
                </option>
                <option value='English'>English</option>
                <option value='中文'>中文</option>
              </select>

              <select
                name='level'
                defaultValue='DEFAULT'
                className='block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
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
          <textarea
            id='text'
            name='text'
            placeholder='Enter text here...'
            className='block h-[40rem] w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Upload Lesson
          </button>
        </form>
      </main>
    </div>
  );
}
