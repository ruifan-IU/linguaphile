import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      className={`fixed right-0 top-0 z-50 h-16 w-screen transform bg-base-300 shadow-md transition-transform duration-500 ease-in-out lg:h-[4.75rem] ${activeNavbar ? '-translate-y-0' : '-translate-y-full'}`}
    >
      <div className='flex h-full items-center justify-start px-3'>
        <button
          className='btn btn-ghost mr-2 flex items-center justify-center p-2'
          onClick={() => setFontSizeHandler(fontSize + 2)}
        >
          <FontAwesomeIcon icon={faPlus} className='w-7' size='lg' />
        </button>
        <div
          className='flex h-12 w-12 items-center justify-center rounded-full bg-amber-50'
          style={{ fontSize: `${fontSize}px` }}
        >
          A
        </div>
        <button
          className='btn btn-ghost ml-2 flex items-center justify-center p-2'
          onClick={() => setFontSizeHandler(fontSize - 2)}
        >
          <FontAwesomeIcon icon={faMinus} className='w-7' size='lg' />
        </button>
        <div className='flex-grow'></div>

        {/* add ui for changing line height*/}
        <button
          className='btn btn-ghost mr-2 flex items-center justify-center p-2'
          onClick={() => setLineHeightHandler(lineHeight + 4)}
        >
          <FontAwesomeIcon icon={faPlus} className='w-7' size='lg' />
        </button>
        <div className='flex h-12 w-12 justify-center rounded-full bg-amber-50 py-1'>
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
          className='btn btn-ghost ml-2 flex items-center justify-center p-2'
          onClick={() => setLineHeightHandler(lineHeight - 2)}
        >
          <FontAwesomeIcon icon={faMinus} className='w-7' size='lg' />
        </button>
      </div>
    </div>
  );
}
