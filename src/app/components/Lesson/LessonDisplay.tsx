'use client';

import { useRef, useEffect, useState, useCallback, Fragment, use } from 'react';
import type { MutableRefObject } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
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
        text,
        wordsRef.current,
        canvasRef,
        currentPage,
        setCurrentPage,
        setLessonPages,
        wordHandler,
      );
    },
    [currentPage, text, onHideHandler],
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
    <div className='flex h-full w-full items-stretch px-4 py-6'>
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
        className='flex h-full w-3 flex-shrink-0 cursor-pointer items-center justify-center p-0 sm:min-w-12 md:min-w-16 lg:min-w-20'
      >
        {currentPage > 0 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'
          />
        )}
      </div>
      <div ref={ref} className='relative flex-auto overflow-hidden'>
        <div
          className='absolute left-0 right-0 h-full w-full'
          style={{ zIndex: -1 }}
        >
          <div className='m-auto h-full w-11/12 rounded-box bg-slate-50 p-4 shadow-lg' />
        </div>
        {lessonPages.length > 0 && lessonPages[currentPage]}
      </div>
      <div
        onClick={() => pageForwardHandler()}
        className='flex h-full w-3 flex-shrink-0 cursor-pointer items-center justify-center p-0 sm:min-w-12 md:min-w-16 lg:min-w-20'
      >
        {currentPage < lessonPages.length - 1 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'
          />
        )}
      </div>
    </div>
  );
};
