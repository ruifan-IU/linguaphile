'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { initializePublicLessons } from '@/slices/lessonListSlice';
import { initializeBookmarked } from '@/slices/lessonListSlice';
import { Lesson } from '.prisma/client';
import { Tab } from '@headlessui/react';
import LessonList from '@/components/Lesson/LessonList';

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
];

export default function LessonTabs({
  lessons,
  bookmarked,
  recentLessons,
}: {
  lessons: Lesson[];
  bookmarked: Lesson[];
  recentLessons: Lesson[];
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
        <Tab>Recent</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          {/* <LessonList
            // lessons={publicLessons.length === 0 ? lessons : publicLessons}
            lessons={lessons}
          /> */}
        </Tab.Panel>
        <Tab.Panel>
          {/* <LessonList
            lessons={
              // bookmarkedLessons.length === 0 ? bookmarked : bookmarkedLessons
              bookmarked
            }
          /> */}
        </Tab.Panel>
        <Tab.Panel>
          {/* <LessonList lessons={recentLessons} /> */}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
