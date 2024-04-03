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

type PropType = {
  slides: Lesson[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
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
            {slides.map((slide, index) => (
              <div
                className='embla__slide md:flex-2 lg:flex-3 flex-1'
                key={slide.id}
              >
                <LessonCard lesson={slide} />
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
