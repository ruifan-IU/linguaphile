'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { initializePublicLessons } from '@/slices/lessonListSlice';
import { initializeBookmarked } from '@/slices/lessonListSlice';
import { Lesson } from '.prisma/client';
import { Tab } from '@headlessui/react';
import LessonList from '@/components/Lesson/LessonList';

export default function LessonTabs({
  lessons,
  bookmarked,
}: {
  lessons: Lesson[];
  bookmarked: Lesson[];
}) {
  const dispatch = useAppDispatch();
  const publicLessons = useAppSelector(
    (state) => state.lessonList.publicLessons,
  );
  const bookmarkedLessons = useAppSelector(
    (state) => state.lessonList.bookmarked,
  );

  useEffect(() => {
    dispatch(initializePublicLessons(lessons));
    dispatch(initializeBookmarked(bookmarked));
  }, [dispatch, lessons, bookmarked]);

  return (
    <Tab.Group>
      <Tab.List className='flex gap-2'>
        <Tab>All Lessons</Tab>
        <Tab>Bookmarked</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <LessonList
            lessons={publicLessons.length === 0 ? lessons : publicLessons}
          />
        </Tab.Panel>
        <Tab.Panel>
          <LessonList
            lessons={
              bookmarkedLessons.length === 0 ? bookmarked : bookmarkedLessons
            }
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
