import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SlidePanelProps {
  activeNavbar: boolean;
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  onResize: (width: number, height: number) => void;
  width: number | undefined;
  height: number | undefined;
}

export default function SlidePanel({
  activeNavbar,
  fontSize,
  setFontSize,
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

  return (
    <div
      className={`fixed right-0 top-0 z-50 h-16 w-screen transform bg-white shadow-md transition-transform duration-300 ease-in-out lg:h-20 ${activeNavbar ? '-translate-y-0' : '-translate-y-full'}`}
    >
      <div className='flex h-full items-center justify-start px-3'>
        <button
          className='btn btn-ghost flex items-center justify-center'
          onClick={() => setFontSizeHandler(fontSize + 2)}
        >
          <FontAwesomeIcon icon={faPlus} className='cursor-pointer' />
        </button>
        <div className='w-10 text-center' style={{ fontSize: `${fontSize}px` }}>
          A
        </div>
        <button
          className='btn btn-ghost flex items-center justify-center'
          onClick={() => setFontSizeHandler(fontSize - 2)}
        >
          <FontAwesomeIcon icon={faMinus} className='cursor-pointer' />
        </button>
      </div>
    </div>
  );
}
