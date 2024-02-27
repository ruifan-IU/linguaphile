import generateRewrite from '@/lib/actions';

export default function ReWrite() {
  return (
    <div className='flex h-full w-screen flex-col items-center pt-4'>
      <header className='mx-auto my-4 space-x-4 text-base font-bold uppercase md:text-xl lg:text-2xl'>
        <span>lesson</span>
        <span>information</span>
      </header>
      <main className='h-full w-9/12'>
        <form
          className='flex h-full w-full flex-col items-center space-y-4'
          action={generateRewrite}
        >
          <div className='flex w-full flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Enter title here...'
              className='input input-bordered w-full flex-grow'
            />
            <div className='flex w-full items-center space-x-4'>
              <select
                name='language'
                defaultValue='DEFAULT'
                className='select select-bordered w-full'
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
                className='select select-bordered w-full'
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
            className='scrollbar-hide textarea textarea-bordered h-4/6 w-full overflow-scroll'
          />
          <button type='submit' className='btn btn-primary uppercase'>
            Generate Lesson
          </button>
        </form>
      </main>
    </div>
  );
}
