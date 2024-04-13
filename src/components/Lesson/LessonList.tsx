import { Lesson } from '@prisma/client';
import LessonCard from './LessonCard';

export default function LessonList({
  lessons,
  session,
}: {
  lessons: Lesson[];
  session: any;
}) {
  //grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3

  return (
    // <EmblaCarousel slides={lessons} />
    <main className='mt-4 flex flex-col items-center justify-between'>
      <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            bookmarked={lesson.bookmarkedByIDs.includes(session?.user.id)}
            liked={lesson.likedByIDs.includes(session?.user.id)}
          />
        ))}
      </div>
    </main>
  );
}
