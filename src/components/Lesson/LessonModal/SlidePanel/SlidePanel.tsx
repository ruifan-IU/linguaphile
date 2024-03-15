import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      className={`fixed right-0 top-0 z-50 h-20 w-screen transform bg-white shadow-md transition-transform duration-500 ease-in-out ${activeNavbar ? '-translate-y-0' : '-translate-y-full'}`}
    >
      <div className='mx-auto flex h-full max-w-2xl items-center justify-start px-5'>
        <button
          className='mr-2 rounded-full bg-indigo-50 px-1 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100'
          onClick={() => setFontSizeHandler(fontSize + 2)}
        >
          <FontAwesomeIcon icon={faPlus} className='w-7' size='lg' />
        </button>
        <div
          className='flex h-12 w-12 items-center justify-center rounded-full'
          style={{ fontSize: `${fontSize}px` }}
        >
          A
        </div>
        <button
          className='ml-2 mr-2 rounded-full bg-indigo-50 px-1 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100'
          onClick={() => setFontSizeHandler(fontSize - 2)}
        >
          <FontAwesomeIcon icon={faMinus} className='w-7' size='lg' />
        </button>
        <div className='flex-grow'></div>

        {/* add ui for changing line height*/}
        <button
          className='mr-2 rounded-full bg-indigo-50 px-1 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100'
          onClick={() => setLineHeightHandler(lineHeight + 4)}
        >
          <FontAwesomeIcon icon={faPlus} className='w-7' size='lg' />
        </button>
        <div className='flex h-12 w-12 rounded-full py-1'>
          <svg xmlns='http://www.w3.org/2000/svg'>
            <line
              x1='14'
              y1={20.5 - lineHeight / 10}
              x2='33.75'
              y2={20.5 - lineHeight / 10}
              stroke='black'
              strokeWidth='2.5'
            />
            <line
              x1='14'
              y1={20.5 + lineHeight / 10}
              x2='33.75'
              y2={20.5 + lineHeight / 10}
              stroke='black'
              strokeWidth='2.5'
            />
          </svg>
        </div>
        <button
          className='ml-2 mr-2 rounded-full bg-indigo-50 px-1 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100'
          onClick={() => setLineHeightHandler(lineHeight - 2)}
        >
          <FontAwesomeIcon icon={faMinus} className='w-7' size='lg' />
        </button>
      </div>
    </div>
  );
}
