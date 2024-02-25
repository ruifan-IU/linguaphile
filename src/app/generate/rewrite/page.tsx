export default function ReWrite() {
  async function getServerSession() {
    'use server';
    return true;
  }

  return (
    <div className='flex h-full w-screen flex-col items-center pt-4'>
      <header className='mx-auto my-4 space-x-4 text-base font-bold uppercase md:text-xl lg:text-2xl'>
        <span>lesson</span>
        <span>infomation</span>
      </header>
      <main className='h-full w-9/12'>
        <form className='flex h-full w-full flex-col items-center space-y-4'>
          {/* <label htmlFor='title'>Title:</label> */}
          <div className='flex w-full flex-col items-center justify-between space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
            <div className='flex w-full flex-row items-center justify-between space-x-4'>
              <select
                defaultValue='DEFAULT'
                className='select select-bordered w-full max-w-xs'
              >
                <option disabled value='DEFAULT'>
                  Language
                </option>
                <option>English</option>
                <option>中文</option>
              </select>

              <select
                defaultValue='DEFAULT'
                className='select select-bordered w-full max-w-xs'
              >
                <option disabled value='DEFAULT'>
                  Level
                </option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <input
              type='text'
              id='title'
              name='lesson'
              placeholder='Enter title here...'
              className='input input-bordered w-full'
            />
          </div>
          {/* <label htmlFor='text' className='label-text'>
            Text:
          </label> */}
          <textarea
            id='text'
            name='text'
            placeholder='Enter text here...'
            className='textarea textarea-bordered h-4/6 w-full overflow-scroll'
          />
          <button type='submit' className='btn btn-primary uppercase'>
            Generate Lesson
          </button>
        </form>
      </main>
    </div>
  );
}
