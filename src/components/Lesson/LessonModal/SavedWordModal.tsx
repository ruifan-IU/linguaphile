import { Dialog } from '@headlessui/react';
import { Word } from '@prisma/client';
import { forwardRef, useState, useEffect } from 'react';
import FamiliarityBar from './FamiliarityBar';
import { removeWord } from '@/lib/word/removeWord';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/lib/hooks';
import { deleteWord } from '@/slices/lessonSlice';
import ModalContainer from './ModalContainer';

interface SavedWordProps {
  word: Word;
  words: { [key: string]: Word };
  bottomClick: boolean;
  onHideHandler: (isNew?: boolean) => void;
}

export default forwardRef(function SavedWordComponent(
  { word, words, bottomClick, onHideHandler }: SavedWordProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const dispatch = useAppDispatch();
  const [removingWord, setRemovingWord] = useState(false);

  const removeWordHandler = async (word: Word) => {
    setRemovingWord(true);
    try {
      await removeWord(word.phrase, word.languageId, word.userId);
      dispatch(deleteWord(word));
      toast.success('Word successfully removed');
    } catch (err) {
      console.error(err);
      toast.error('Failed to remove word');
      onHideHandler();
    }
    setRemovingWord(false);
  };

  useEffect(() => {
    if (!(word?.phrase in words)) {
      onHideHandler();
    }
  }, [onHideHandler, word?.phrase, words]);

  return word ? (
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
                  <div>Phrase: {word.phrase}</div>
                  <div>Definition: {word.translation}</div>
                  <div>
                    Familiarity: <FamiliarityBar key={word.id} word={word} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-green-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
          <button
            type='button'
            className='w-full rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto'
            onClick={() => removeWordHandler(word)}
          >
            {removingWord ? 'Removing...' : 'Remove'}
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
  ) : null;
});
