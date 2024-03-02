import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
interface SlidePanelProps {
  activeNavbar: boolean;
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  lineHeight: number;
  setLineHeight: React.Dispatch<React.SetStateAction<number>>;
  onResize: (width: number, height: number) => void;
  width: number | undefined;
  height: number | undefined;
}

export default function SlidePanel({
  activeNavbar,
  fontSize,
  setFontSize,
  lineHeight,
  setLineHeight,
  onResize,
  width,
  height,
}: SlidePanelProps) {
  const setFontSizeHandler = (value: number) => {
    if (value < 14 || value > 40) return;
    setFontSize(value);
    if (width && height) {
      onResize(width, height);
    }
  };

  const setLineHeightHandler = (value: number) => {
    if (value < 20 || value > 70) return;
    setLineHeight(value);
    if (width && height) {
      onResize(width, height);
    }
  };

  return (
    <div
      className={`fixed right-0 top-0 z-50 h-16 w-screen transform bg-white shadow-md transition-transform duration-300 ease-in-out lg:h-20 ${activeNavbar ? '-translate-y-0' : '-translate-y-full'}`}
    >
      <div className='flex h-full items-center justify-start px-3'>
        <button
          className='btn btn-ghost mr-2 flex items-center justify-center p-2'
          onClick={() => setFontSizeHandler(fontSize + 2)}
        >
          <PlusIcon className='w-7' />
        </button>
        <div
          className='flex h-12 w-12 items-center justify-center rounded-full border'
          style={{ fontSize: `${fontSize}px` }}
        >
          A
        </div>
        <button
          className='btn btn-ghost ml-2 flex items-center justify-center p-2'
          onClick={() => setFontSizeHandler(fontSize - 2)}
        >
          <MinusIcon className='w-7' />
        </button>
        <div className='flex-grow'></div>

        {/* add ui for changing line height*/}
        <button
          className='btn btn-ghost mr-2 flex items-center justify-center p-2'
          onClick={() => setLineHeightHandler(lineHeight + 4)}
        >
          <PlusIcon className='w-7' />
        </button>
        <div className='flex h-12 w-12 justify-center rounded-full border py-1'>
          <svg xmlns='http://www.w3.org/2000/svg'>
            <line
              x1='13'
              y1={19 - lineHeight / 10}
              x2='32.75'
              y2={19 - lineHeight / 10}
              stroke='black'
              strokeWidth='1'
            />
            <line
              x1='13'
              y1={19 + lineHeight / 10}
              x2='32.75'
              y2={19 + lineHeight / 10}
              stroke='black'
              strokeWidth='1'
            />
          </svg>
        </div>
        <button
          className='btn btn-ghost ml-2 flex items-center justify-center p-2'
          onClick={() => setLineHeightHandler(lineHeight - 2)}
        >
          <MinusIcon className='w-7' />
        </button>
      </div>
    </div>
  );
}
