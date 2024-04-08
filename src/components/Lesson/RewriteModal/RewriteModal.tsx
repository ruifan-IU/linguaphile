import { useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import ModalContainer from '../LessonModal/ModalContainer';
import { Lesson } from '@prisma/client';
import { generateRewrite } from '@/lib/actions';

interface RewriteModalProps {
  selectedLesson: Lesson | null;
  setSelectedLesson: React.Dispatch<React.SetStateAction<Lesson | null>>;
}

export default function RewriteModal({
  selectedLesson,
  setSelectedLesson,
}: RewriteModalProps) {
  const dispatch = useAppDispatch();
  const [level, setLevel] = useState<string>('Difficulty Level');

  const onHideHandler = () => {
    setSelectedLesson(null);
    setLevel('Difficulty Level');
  };

  return (
    <Transition.Root show={!!selectedLesson} as={Fragment}>
      <Dialog as='div' className='relative z-30' onClose={onHideHandler}>
        <ModalContainer>
          <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs'>
            <Dialog.Title className='bg-green-50 px-4 py-3 text-lg font-semibold text-gray-900 sm:px-6'>
              Rewrite Lesson
            </Dialog.Title>
            <form action={generateRewrite}>
              <div className='px-4 pb-4 pt-2 sm:px-6'>
                <div>
                  <input
                    type='hidden'
                    name='lessonId'
                    value={selectedLesson?.id || ''}
                  />
                  <select
                    id='level'
                    name='level'
                    className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option
                      disabled
                      value='Difficulty Level'
                      className='text-gray-900'
                    >
                      Difficulty Level
                    </option>
                    <option>A-1</option>
                    <option>A-2</option>
                    <option>B-1</option>
                    <option>B-2</option>
                    <option>C-1</option>
                    <option>C-2</option>
                  </select>
                </div>
              </div>
              <div className='bg-green-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                <button
                  type='submit'
                  name='rewrite'
                  className={`w-full rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto ${level === 'Difficulty Level' ? 'cursor-not-allowed bg-indigo-300 hover:bg-indigo-300' : ''}`}
                  disabled={level === 'Difficulty Level'}
                >
                  Rewrite
                </button>
                <button
                  type='button'
                  name='back'
                  className='mt-3 w-full rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 sm:mt-0 sm:w-auto'
                  onClick={onHideHandler}
                >
                  Back
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </ModalContainer>
      </Dialog>
    </Transition.Root>
  );
}
