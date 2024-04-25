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
    <div className='mt-10 flex w-full flex-col items-center justify-center space-y-4'>
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
                ? 'text-slate-600'
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
