'use client';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LessonSearch = () => {
  return (
    <div className='m-6 flex h-2/5 w-full rounded-lg border-2 border-solid border-gray-100 bg-white'>
      <input
        type='search'
        name='search'
        placeholder='Search...'
        className='mr-0.5 w-full rounded-l-lg border-none bg-transparent px-4 py-1 text-gray-400 outline-none hover:border hover:border-solid hover:border-gray-300 focus:outline-none'
      />
      <button
        type='submit'
        className='rounded-r-lg border-none bg-white px-4 py-2 text-black hover:border hover:border-solid hover:border-gray-300'
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default LessonSearch;
