'use client';
import { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { getTitles } from '../../lib/lessons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { get } from 'request';
type Titles = {
  value: string;
  label: string;
  color: string;
};
const LessonSearch = () => {
  const [search, setSearch] = useState<string>('');
  const [titles, setTitles] = useState<Titles[]>([]);

  useEffect(() => {
    async function fetchTitles() {
      const data = await getTitles();
      console.log(data);
      const arr: Titles[] = [];
      for (const title of data) {
        arr.push({ value: title.title, label: title.title, color: '#FF8B00' });
      }
      setTitles(arr);
    }
    fetchTitles();
  }, []);

  const filterTitles = (inputValue: string) => {
    console.log(
      titles.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase()),
      ),
    );
    return titles.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };
  const loadOptions = (
    inputValue: string,
    callback: (options: Titles[]) => void,
  ) => {
    setTimeout(() => {
      callback(filterTitles(inputValue));
    }, 1000);
  };

  return (
    <div className='m-6 w-full '>
      <div className='flex h-2/5 w-full rounded-lg border-2 border-solid border-gray-100 bg-white'>
        <AsyncSelect
          className='w-full text-slate-950'
          loadOptions={loadOptions}
        />

        {/* <input
          type='search'
          name='search'
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='mr-0.5 w-full rounded-l-lg border-none bg-transparent px-4 py-1 text-gray-400 outline-none hover:border hover:border-solid hover:border-gray-300 focus:outline-none'
        />
        <button
          type='submit'
          className='rounded-r-lg border-none bg-white px-4 py-2 text-black hover:border hover:border-solid hover:border-gray-300'
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button> */}
      </div>
      <div className={`${search ? '' : 'hidden'}`}>Hello</div>
    </div>
  );
};

export default LessonSearch;
