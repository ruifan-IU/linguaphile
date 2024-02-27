import { useState } from 'react';
import changeFamiliarity from '../../../utils/word/changeFamiliarity';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Word } from '@prisma/client';
import { toast } from 'react-toastify';

interface FamiliarityBarProps {
  familiarity: number;
  word: Word;
  setWords: React.Dispatch<React.SetStateAction<Map<string, Word>>>;
}

export default function FamiliarityBar({
  familiarity,
  word,
  setWords,
}: FamiliarityBarProps) {
  const [hoveredStar, setHoveredStar] = useState<number>(0);

  const onStarClick = async (familiarity: number) => {
    try {
      await changeFamiliarity(
        familiarity,
        word.phrase,
        word.languageId,
        word.userId,
      );
      setWords((prevWords) => {
        const newWords: Map<string, Word> = new Map(prevWords);
        newWords.set(word.phrase, { ...word, familiarity });
        return newWords;
      });
    } catch (error) {
      toast.error('Failed to change familiarity. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className='flex'>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <button
            key={i}
            className='text-2xl focus:outline-none'
            onMouseEnter={() => setHoveredStar(i + 1)}
            onMouseLeave={() => setHoveredStar(0)}
            onClick={() => onStarClick(i + 1)}
          >
            {i < (hoveredStar || familiarity) ? (
              <FontAwesomeIcon icon={solidStar} className='text-info' />
            ) : (
              <FontAwesomeIcon icon={regularStar} className='text-info' />
            )}
          </button>
        ))}
    </div>
  );
}
