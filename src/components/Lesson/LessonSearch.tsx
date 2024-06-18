'use client';
import { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { useRouter } from 'next/navigation';
import { getAllLessons } from '../../lib/lessons';

type Titles = {
  value: string;
  label: string;
};
const LessonSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [titles, setTitles] = useState<Titles[]>([]);

  useEffect(() => {
    async function fetchTitles() {
      const data = await getAllLessons();
      const arr: Titles[] = [];
      for (const title of data) {
        arr.push({ value: title.id, label: title.title });
      }
      setTitles(arr);
    }
    fetchTitles();
  }, []);

  const filterTitles = (inputValue: string) => {
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

  const redirectLesson = (id: string) => {
    router.replace(`/lesson/${id}`);
  };

  return (
    <div className='m-6 w-full '>
      <div className='flex h-2/5 w-full rounded-lg border-2 border-solid border-gray-100 bg-white'>
        <AsyncSelect
          className='w-full text-slate-950'
          loadOptions={loadOptions}
          onChange={(e) => redirectLesson(e?.value || '')}
        />
      </div>
    </div>
  );
};

export default LessonSearch;
