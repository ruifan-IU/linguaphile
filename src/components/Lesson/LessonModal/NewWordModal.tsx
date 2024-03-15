import { Dialog } from '@headlessui/react';
import React, { forwardRef, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { addWord } from '@/lib/word/addWord';
import { useAppDispatch } from '@/lib/hooks';
import { saveWord } from '@/slices/lessonSlice';
import ModalContainer from './ModalContainer';
import { Word } from '@prisma/client';
import { Session } from 'next-auth';
import { translateWord } from '@/lib/word/translateWord';
import { GoogleTranslateIcon } from '@/lib/SVGs';

interface NewWordProps {
  session: Session | null;
  word: string;
  words: { [key: string]: Word };
  translation: string;
  bottomClick: boolean;
  onHideHandler: (isNew?: boolean) => void;
}

export default forwardRef(function NewWord(
  { session, word, words, bottomClick, onHideHandler }: NewWordProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const dispatch = useAppDispatch();
  const [addingWord, setAddingWord] = useState(false);
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);

  const googleTranslate = async (word: string) => {
    setLoading(true);
    try {
      const translation = await translateWord(word);
      if (translation) {
        setTranslation(translation);
      } else {
        toast.error('Failed to translate word');
      }
      setLoading(false);
    } catch (e) {
      console.error(e);
      toast.error('Failed to translate word');
      setLoading(false);
    }
  };

  const addWordHandler = async () => {
    setAddingWord(true);
    try {
      await addWord(word, translation, 'en', session?.user.id);
      dispatch(
        saveWord({
          phrase: word,
          translation,
          familiarity: 0,
          languageId: 'en',
          userId: session?.user.id,
          id: '',
        }),
      );
      toast.success('Word successfully added!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to add word');
      onHideHandler();
    }
    setAddingWord(false);
  };

  useEffect(() => {
    if (word in words) {
      onHideHandler();
    }
  }, [addingWord, onHideHandler, word, words]);

  const traslationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTranslation(e.target.value);
  };

  return (
    <ModalContainer bottomClick={bottomClick}>
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
                  {session && (
                    <>
                      <div className='mx-auto text-center text-lg font-semibold'>
                        {word}
                      </div>
                      <div className='tooltip' data-tip='Google Translate'>
                        <button
                          name='google-translate'
                          type='button'
                          className='btn btn-ghost'
                          onClick={() => googleTranslate(word)}
                        >
                          <GoogleTranslateIcon />
                        </button>
                        {loading && (
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
                      </div>
                      <div className='mt-2'>
                        <input
                          type='text'
                          name='translation'
                          id='translation'
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                          placeholder='Enter translation'
                          value={translation}
                          onChange={(e) => traslationHandler(e)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-green-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
          <button
            type='button'
            className='py-1.5q w-full rounded-md bg-indigo-600 px-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto'
            onClick={() => addWordHandler()}
            disabled={!session}
          >
            {addingWord ? 'Adding...' : 'Add'}
          </button>
          <button
            type='button'
            className='mt-3 w-full rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 sm:mt-0 sm:w-auto'
            onClick={() => onHideHandler()}
          >
            Back
          </button>
        </div>
      </Dialog.Panel>
    </ModalContainer>
  );
});
