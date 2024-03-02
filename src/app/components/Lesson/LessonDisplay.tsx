'use client';

import { useRef, useEffect, useState, useCallback, Fragment } from 'react';
import type { MutableRefObject } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import NewWordModal from './LessonModal/NewWordModal';
import SavedWordModal from './LessonModal/SavedWordModal';
import { Session } from 'next-auth';
import { Word } from '@prisma/client';
import { translateWord } from '@/utils/word/translateWord';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { initializeWords } from '@/slices/lessonSlice';
import drawPages from '@/utils/word/drawPages';
import SlidePanel from './LessonModal/SlidePanel/SlidePanel';

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

  const onHideHandler = (isNew: boolean = false) => {
    if (!selectedWord) return;
    if (selectedWord in words) {
      selectedWordRef.current.classList.add('fill-info');
    } else {
      selectedWordRef.current.classList.remove('fill-info');
    }
    selectedWordRef.current.classList.remove('fill-teal-600');
    setTranslation('');
    setSelectedWord('');
    if (isNew) {
      setNewWordModalOpen(false);
    } else {
      setSavedWordModalOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setLessonPages([]);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        isSaved: Boolean,
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
        if (isSaved) return;
        if (word) {
          try {
            const translation = await translateWord(word);
            if (translation) {
              setTranslation(translation);
            } else {
              toast.error('Failed to translate word');
            }
          } catch (e) {
            console.error(e);
            toast.error('Failed to translate word');
          }
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
    <div className='flex h-full w-full items-center px-4 py-6'>
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
        className='relative flex h-5/6 w-3 flex-shrink-0 cursor-pointer items-center justify-center p-0 sm:min-w-12 md:min-w-16 lg:min-w-20'
      >
        {currentPage > 0 && <ArrowLeftIcon className='absolute right-1 sm:right-3 w-5 sm:w-10' />}
      </div>
      <div ref={ref} className='relative h-full flex-auto overflow-hidden'>
        <button
          className={`btn btn-ghost absolute right-3 top-3 z-10 ${activeNavbar ? 'border-slate-200 bg-slate-100' : ''}`}
          onClick={() => setActiveNavbar((prev) => !prev)}
        >
          <Cog6ToothIcon
            className={`w-5 transform transition-transform duration-500 ease-in-out ${activeNavbar ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className='absolute left-0 right-0 m-auto h-full rounded-box bg-slate-50 p-4 shadow-lg'
          style={{ zIndex: -1 }}
        />
        <div className='pt-2'>
          {lessonPages.length > 0 && lessonPages[currentPage]}
        </div>
      </div>
      <div
        onClick={() => pageForwardHandler()}
        className='relative flex h-5/6 w-3 flex-shrink-0 cursor-pointer items-center justify-center p-0 sm:min-w-12 md:min-w-16 lg:min-w-20'
      >
        {currentPage < lessonPages.length - 1 && (
          <ArrowRightIcon className='absolute left-1 sm:left-3 w-5 sm:w-10' />
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
