'use client';

import { Lesson } from '.prisma/client';
import LessonCard from './LessonCard';

export default function LessonList({ lessons }: { lessons: Lesson[] }) {
  //grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3

  return (
    // <EmblaCarousel slides={lessons} />
    // <div className='scrollbar-hide flex gap-5 overflow-x-auto'>
    <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}
