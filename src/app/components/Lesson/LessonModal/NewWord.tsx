import { Dialog } from '@headlessui/react';
import React, { forwardRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Word } from '@prisma/client';
import { addWord } from '@/utils/word/addWord';
import { SetStateAction } from 'react';

interface NewWordProps {
  session: import('next-auth').Session | null;
  phrase: string;
  translation: string;
  setWords: React.Dispatch<SetStateAction<Map<string, Word>>>;
  onHideHandler: () => void;
  selectedWordRef: React.MutableRefObject<HTMLCanvasElement>;
}

export default forwardRef(function NewWord(
  {
    session,
    phrase,
    translation,
    setWords,
    onHideHandler,
    selectedWordRef,
  }: NewWordProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const [addingWord, setAddingWord] = useState(false);

  const addWordHandler = async () => {
    setAddingWord(true);
    try {
      await addWord(phrase, translation, 'en', session?.user.id);
      selectedWordRef.current.classList.add('fill-info');
      setWords((prevWords) => {
        const newWords = new Map(prevWords);
        newWords.set(phrase, {
          phrase,
          translation,
          familiarity: 0,
          userId: session?.user.id,
          languageId: 'en',
          id: '',
        });
        return newWords;
      });
      toast.success('Word successfully added!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to add word');
    }
    onHideHandler();
    setAddingWord(false);
  };

  return (
    <Dialog.Panel
      className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'
      ref={forwardedRef}
    >
      <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
        <div className='sm:flex sm:items-start'>
          <div className='mt-3 w-full text-center sm:mt-0 sm:text-left'>
            <div className='mt-2 w-full'>
              <div className='w-full'>
                {!session && <div>Must log in to add words.</div>}
                {session && !translation && (
                  <div className='flex items-center justify-center'>
                    <div
                      className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                      role='status'
                    >
                      <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                        Loading...
                      </span>
                    </div>
                  </div>
                )}
                {session && translation && (
                  <>
                    <div>Phrase: {phrase}</div>
                    <div>Definition: {translation}</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
        <button
          type='button'
          className='btn btn-primary w-full sm:ml-3 sm:mt-0 sm:w-auto'
          onClick={addWordHandler}
          disabled={!session}
        >
          {addingWord ? 'Adding...' : 'Add'}
        </button>
        <button
          type='button'
          className='btn btn-secondary mt-3 w-full sm:mt-0 sm:w-auto'
          onClick={onHideHandler}
        >
          Back
        </button>
      </div>
    </Dialog.Panel>
  );
});
