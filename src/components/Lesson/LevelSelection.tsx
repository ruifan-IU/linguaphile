'use client';

import { useState } from 'react';
import { selectLevels } from '@/lib/actions';
import RangeSlider from 'react-range-slider-input';

const LevelSelection = () => {
  const [selectedRange, setSelectedRange] = useState<number[]>([1, 6]);

  function handleSelectLevels() {
    selectLevels(selectedRange[0], selectedRange[1]);
  }
  return (
    <div className='m-6 flex w-5/6 flex-col items-center space-y-4'>
      <h2 className='text-lg font-semibold'>Select Range of Level</h2>
      <RangeSlider
        min={1}
        max={6}
        step={1}
        value={selectedRange}
        onInput={setSelectedRange}
        onThumbDragEnd={handleSelectLevels}
      />
      <div className='flex w-full justify-between'>
        {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level, index) => (
          <div
            key={index}
            className={`text-sm font-semibold ${
              selectedRange[0] <= index + 1 && index + 1 <= selectedRange[1]
                ? 'text-black'
                : 'text-gray-400'
            }`}
          >
            {level}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelSelection;
