'use client';

import { useRef, useEffect, useState, useCallback, Fragment } from 'react';
import type { MutableRefObject } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import {
  faChevronLeft,
  faChevronRight,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { Dialog, Transition } from '@headlessui/react';
import NewWordModal from './LessonModal/NewWordModal';
import SavedWordModal from './LessonModal/SavedWordModal';
import { Session } from 'next-auth';
import { Word } from '@prisma/client';
import { translateWord } from '@/lib/word/translateWord';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { initializeWords } from '@/slices/lessonSlice';
import drawPages from '@/lib/word/drawPages';
import SlidePanel from './LessonModal/SlidePanel/SlidePanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LessonDisplayInterface {
  text: string;
  session: Session | null;
  savedWords: { [key: string]: Word } | null;
}

export const LessonDisplay = ({
  text,
  session,
  savedWords,
}: LessonDisplayInterface) => {
  const [lessonPages, setLessonPages] = useState<Array<JSX.Element>>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [newWordModalOpen, setNewWordModalOpen] = useState(false);
  const [savedWordModalOpen, setSavedWordModalOpen] = useState(false);
  const [bottomClick, setBottomClick] = useState(false);
  const [selectedWord, setSelectedWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [fontSize, setFontSize] = useState(20);
  const [lineHeight, setLineHeight] = useState(50);
  const selectedWordRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.lesson.words);
  const wordsRef = useRef(words);

  useEffect(() => {
    wordsRef.current = words;
  }, [words]);

  useEffect(() => {
    if (savedWords) {
      dispatch(initializeWords(savedWords));
    }
  }, [savedWords, dispatch]);

  const onHideHandler = () => {
    if (!selectedWord) return;
    if (selectedWord in words) {
      selectedWordRef.current.classList.add('fill-blue-800');
    } else {
      selectedWordRef.current.classList.remove('fill-blue-800');
    }
    selectedWordRef.current.classList.remove('fill-teal-600');
    setTranslation('');
    setSelectedWord('');
    setNewWordModalOpen(false);
    setSavedWordModalOpen(false);
  };

  useEffect(() => {
    if (!lessonPages) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft' && currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
      if (e.code === 'ArrowRight' && currentPage < lessonPages.length - 1) {
        setCurrentPage(currentPage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, lessonPages]);

  const onResize = useCallback(
    (width?: number, height?: number) => {
      const wordHandler = async (
        event: React.MouseEvent<SVGTSpanElement, MouseEvent>,
      ) => {
        if (event.clientY > (window.innerHeight - 30) / 2) {
          setBottomClick(true);
        } else {
          setBottomClick(false);
        }
        if (!event.target) return;
        const eventTarget = event.target as HTMLCanvasElement;
        eventTarget.classList.add('fill-teal-600');
        const textContent = eventTarget.textContent;
        const word = textContent?.trim().replace(/[,./?;':~&%$#@*^|]/g, '');
        if (word) {
          setSelectedWord(word);
          selectedWordRef.current = eventTarget;
        }
        if (word && word in wordsRef.current) {
          setSavedWordModalOpen(true);
        } else {
          setNewWordModalOpen(true);
        }
      };

      if (!width || !height || !text) return;
      setLessonPages([]);
      drawPages(
        width,
        height,
        lineHeight,
        fontSize,
        text,
        wordsRef.current,
        canvasRef,
        currentPage,
        setCurrentPage,
        setLessonPages,
        wordHandler,
      );
    },
    [currentPage, text, fontSize, lineHeight],
  );

  const { ref, height, width } = useResizeDetector({ onResize });

  const pageBackHandler = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
    onResize(width, height);
  };

  const pageForwardHandler = () => {
    if (currentPage < lessonPages.length - 1) setCurrentPage(currentPage + 1);
    onResize(width, height);
  };

  return (
    <div className='mx-auto flex h-full max-w-[87rem] items-center py-5 px-3'>
      <canvas ref={canvasRef} className='hidden' />
      <Transition.Root show={savedWordModalOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={onHideHandler}>
          <SavedWordModal
            word={words[selectedWord]}
            words={words}
            bottomClick={bottomClick}
            onHideHandler={onHideHandler}
          />
        </Dialog>
      </Transition.Root>
      <Transition.Root show={newWordModalOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={onHideHandler}>
          <NewWordModal
            word={selectedWord}
            words={words}
            translation={translation}
            bottomClick={bottomClick}
            onHideHandler={onHideHandler}
            session={session}
          />
        </Dialog>
      </Transition.Root>
      <div
        onClick={() => pageBackHandler()}
        className='flex h-5/6 w-3 flex-shrink-0 cursor-pointer items-center justify-center p-0 sm:min-w-12 md:min-w-16 lg:min-w-20'
      >
        {currentPage > 0 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className='mr-2 w-5 sm:w-10 sm:text-2xl'
          />
        )}
      </div>
      <div
        ref={ref}
        className='relative h-full flex-auto overflow-hidden rounded-3xl bg-white shadow-lg'
      >
        <button
          className={`absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 lg:right-3 lg:top-3 lg:h-11 lg:w-11 lg:rounded-2xl`}
          onClick={() => setActiveNavbar((prev) => !prev)}
        >
          <FontAwesomeIcon
            icon={faGear}
            className={`text-sm lg:text-lg ${activeNavbar ? 'rotate-180 transform' : ''} transition-transform duration-500 ease-in-out`}
          />
        </button>
        <div className='pt-2'>
          {lessonPages.length > 0 && lessonPages[currentPage]}
        </div>
      </div>
      <div
        onClick={() => pageForwardHandler()}
        className='flex h-5/6 w-3 flex-shrink-0 cursor-pointer items-center justify-center p-0 sm:min-w-12 md:min-w-16 lg:min-w-20'
      >
        {currentPage < lessonPages.length - 1 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className='ml-2 w-5 sm:w-10 sm:text-2xl'
          />
        )}
      </div>
      <SlidePanel
        activeNavbar={activeNavbar}
        fontSize={fontSize}
        setFontSize={setFontSize}
        lineHeight={lineHeight}
        setLineHeight={setLineHeight}
        onResize={onResize}
        width={width}
        height={height}
      />
    </div>
  );
};
