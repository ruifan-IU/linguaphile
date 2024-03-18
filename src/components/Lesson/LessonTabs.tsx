'use client';
import { Tab } from '@headlessui/react';
import LessonList from '@/components/Lesson/LessonList';

export default function LessonTabs({
  lessons,
  bookmarked,
}: {
  lessons: Lesson[];
  bookmarked: Lesson[];
}) {
  return (
    <Tab.Group>
      <Tab.List className='flex gap-2'>
        <Tab>All Lessons</Tab>
        <Tab>Bookmarked</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <LessonList lessons={lessons} />
        </Tab.Panel>
        <Tab.Panel>
          <LessonList lessons={bookmarked} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
