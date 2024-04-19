'use client';

const LessonSearch = () => {
  return (
    <div className='m-6 flex h-2/5 w-full rounded bg-slate-100'>
      <input
        type='search'
        name='search'
        placeholder='Search...'
        className='w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none'
      />
      <button
        type='submit'
        className=' rounded bg-indigo-600 px-4 py-2 text-white'
      >
        Search
      </button>
    </div>
  );
};

export default LessonSearch;
