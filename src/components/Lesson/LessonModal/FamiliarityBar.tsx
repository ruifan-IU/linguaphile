'use client';

import { useState } from 'react';
import changeFamiliarity from '@/lib/word/changeFamiliarity';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Word } from '@prisma/client';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { saveWord } from '@/slices/lessonSlice';

interface FamiliarityBarProps {
  word: Word;
}

export default function FamiliarityBar({ word }: FamiliarityBarProps) {
  const [stars, setStars] = useState<number | null>(null);
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const dispatch = useAppDispatch();
  const familiarity = useAppSelector(
    (state) => state.lesson.words[word.phrase]?.familiarity,
  );

  const onStarClick = async (familiarity: number) => {
    try {
      await changeFamiliarity(
        familiarity,
        word.phrase,
        word.languageId,
        word.userId,
      );
      dispatch(
        saveWord({
          ...word,
          familiarity,
        }),
      );
      setStars(familiarity);
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
            {i < (hoveredStar || stars || word.familiarity) ? (
              <FontAwesomeIcon icon={solidStar} className='text-accent' />
            ) : (
              <FontAwesomeIcon icon={regularStar} className='text-accent' />
            )}
          </button>
        ))}
    </div>
  );
}
