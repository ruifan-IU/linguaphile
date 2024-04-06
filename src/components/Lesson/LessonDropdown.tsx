'use client';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Lesson } from '@prisma/client';
interface LessonDropdownProps {
  selectedLesson: Lesson;
  setSelectedLesson: React.Dispatch<React.SetStateAction<Lesson | null>>;
}

export default function LessonDropdown({
  selectedLesson,
  setSelectedLesson,
}: LessonDropdownProps) {
  const onClickRewrite = () => {
    setSelectedLesson(selectedLesson);
  };

  const solutions = [
    { name: 'Edit', href: '#' },
    { name: 'Rewrite', href: '#', onClick: onClickRewrite },
  ];

  return (
    <Popover className='relative'>
      <Popover.Button className='hover:bg-gray-30 z-20 absolute bottom-0 right-0 m-1 rounded-lg bg-gray-200 p-1 text-xs font-bold text-gray-900 shadow-lg'>
        <FontAwesomeIcon icon={faEllipsisVertical} size='xl' onClick={() => {}} />
      </Popover.Button>

      <Popover.Overlay className='fixed inset-0' />

      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute bottom-3 right-0 z-10 mt-5 flex w-screen max-w-min px-4'>
          <div className='w-32 shrink rounded-xl bg-white p-3 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5'>
            {solutions.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={item.onClick}
                className='block hover:text-indigo-600'
              >
                {item.name}
              </a>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
