import { useState } from 'react';
import { db } from '@/lib/db';
import { faStar as regularStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FamiliarityBar({ familiarity }: { familiarity: number }) {
  const [hoveredStar, setHoveredStar] = useState<number>(0);

  return (
    <div className='flex'>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <button
            key={i}
            className='focus:outline-none text-2xl'
            onMouseEnter={() => setHoveredStar(i + 1)}
            onMouseLeave={() => setHoveredStar(0)}
            onClick={async () => {
              await db.word.update({
                where: { phrase_languageId_userId: { phrase: 'test', languageId: 'en', userId: 'test' } },
                data: { familiarity: i + 1 },
              });
            }}
          >
            {i < (hoveredStar || familiarity) ? (
              <FontAwesomeIcon icon={solidStar}  className='text-info' />
            ) : (
              <FontAwesomeIcon icon={regularStar} className='text-info' />
            )}
          </button>
        ))}
    </div>
  );
}
