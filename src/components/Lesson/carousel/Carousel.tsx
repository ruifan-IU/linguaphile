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
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <section className='embla m-auto w-[21rem] md:w-[45rem] lg:w-[69rem]'>
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
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
};

export default EmblaCarousel;
