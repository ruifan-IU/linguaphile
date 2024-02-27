import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { Session } from 'next-auth';
import NewWord from './NewWord';
import SavedWord from './SavedWord';
import { Word } from '@prisma/client';

interface LessonModalProps {
  modalOpen: boolean;
  onHideHandler: () => void;
  bottomClick: boolean;
  selectedWord: string;
  translation: string;
  session: Session | null;
  words: Map<string, Word>;
  setWords: React.Dispatch<React.SetStateAction<Map<string, Word>>>;
  selectedWordRef: React.MutableRefObject<HTMLCanvasElement>;
}

export default function LessonModal({
  modalOpen,
  onHideHandler,
  bottomClick,
  selectedWord,
  translation,
  session,
  words,
  setWords,
  selectedWordRef
}: LessonModalProps) {
  if (!modalOpen) return null;

  return (
    <>
      <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity' />
      </Transition.Child>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div
          className={`flex min-h-full justify-center p-16 text-center sm:py-40 ${bottomClick ? 'items-start' : 'items-end'}`}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            {words.has(selectedWord) ? (
              <SavedWord
                word={words.get(selectedWord) as Word}
                onHideHandler={onHideHandler}
                words={words}
                setWords={setWords}
                selectedWordRef={selectedWordRef}
              />
            ) : (
              <NewWord
                session={session}
                phrase={selectedWord}
                translation={translation}
                onHideHandler={onHideHandler}
                setWords={setWords}
                selectedWordRef={selectedWordRef}
              />
            )}
          </Transition.Child>
        </div>
      </div>
    </>
  );
}
