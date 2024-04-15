'use client';

import { useState } from 'react';
import { selectLevels } from '@/lib/actions';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const LevelSelection = () => {
  const [selectedRange, setSelectedRange] = useState<number[]>([1, 6]);

  function handleSelectLevels() {
    selectLevels(selectedRange[0], selectedRange[1]);
  }
  return (
    <div className='mt-4 flex w-3/5 flex-col items-center space-y-4'>
      <h2 className='text-lg font-semibold'>Select Range of Level</h2>
      <RangeSlider
        min={1}
        max={6}
        step={1}
        value={selectedRange}
        onInput={setSelectedRange}
        onThumbDragEnd={handleSelectLevels}
      />
      <p>
        {selectedRange[0]} {selectedRange[1]}
      </p>
    </div>
  );
};

export default LevelSelection;
