import { Dialog } from '@headlessui/react';
import { Word } from '@prisma/client';
import { forwardRef, useState } from 'react';
import FamiliarityBar from './FamiliarityBar';
import { removeWord } from '@/utils/word/removeWord';
import { toast } from 'react-toastify';

interface SavedWordProps {
  word: Word;
  onHideHandler: () => void;
  words: Map<string, Word>;
  setWords: React.Dispatch<React.SetStateAction<Map<string, Word>>>;
  selectedWordRef: React.MutableRefObject<HTMLCanvasElement>;
}

export default forwardRef(function SavedWordComponent(
  { word, onHideHandler, setWords, selectedWordRef }: SavedWordProps,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const [removingWord, setRemovingWord] = useState(false);

  const removeWordHandler = async (word: Word) => {
    setRemovingWord(true);
    try {
      await removeWord(word.phrase, word.languageId, word.userId);
      selectedWordRef.current.style.fill = 'black';
      setWords((prevWords) => {
        const newWords: Map<string, Word> = new Map(prevWords);
        newWords.delete(word.phrase);
        return newWords;
      });
      toast.success('Word successfully removed');
    } catch (err) {
      console.error(err);
      toast.error('Failed to remove word');
    }
    onHideHandler();
    setRemovingWord(false);
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
                <div>Phrase: {word.phrase}</div>
                <div>Definition: {word.translation}</div>
                <div>
                  Familiarity:{' '}
                  <FamiliarityBar
                    familiarity={word.familiarity}
                    word={word}
                    setWords={setWords}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
        <button
          type='button'
          className='btn btn-primary w-full sm:ml-3 sm:mt-0 sm:w-auto'
          onClick={() => removeWordHandler(word)}
        >
          Remove
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
