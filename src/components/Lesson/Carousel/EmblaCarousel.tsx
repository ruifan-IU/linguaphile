'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './CarouselDotButton';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { Lesson } from '.prisma/client';
import LessonCard from '@/components/Lesson/LessonCard';

interface EmblaCarouselProps {
  slides: Lesson[];
  session: any;
  options?: EmblaOptionsType;
}

const EmblaCarousel = ({
  slides,
  session,
  options,
}: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className='flex flex-row items-center'>
      <div className='min-w-12'>
        {prevBtnDisabled ? (
          <div></div>
        ) : (
          <PrevButton onClick={onPrevButtonClick} />
        )}
      </div>
      <section className='embla m-auto w-[15rem] md:w-[40rem] lg:w-[72rem]'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='embla__container'>
            {slides.map((slide) => (
              <div
                className='embla__slide flex-1 md:flex-2 lg:flex-3'
                key={slide.id}
              >
                <LessonCard
                  bookmarked={slide.bookmarkedByIDs.includes(session?.user.id)}
                  liked={slide.likedByIDs.includes(session?.user.id)}
                  lesson={slide}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='min-w-12'>
        {nextBtnDisabled ? (
          <div></div>
        ) : (
          <NextButton onClick={onNextButtonClick} />
        )}
      </div>
    </div>
  );
};

export default EmblaCarousel;
