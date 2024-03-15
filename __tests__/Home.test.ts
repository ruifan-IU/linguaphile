import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';
import { db } from '@/lib/db';

jest.mock('@/lib/db', () => ({
  db: {
    lesson: {
      findMany: jest.fn(),
    },
  },
}));

describe('Home', () => {
  it('renders lessons correctly', async () => {
    const mockLessons = [
      { id: '1', title: 'Lesson 1' },
      { id: '2', title: 'Lesson 2' },
    ];

    (db.lesson.findMany as jest.Mock).mockResolvedValue(mockLessons);

    render(await Home());

    const lessonElements = await screen.findAllByText(/Lesson \d/);

    expect(lessonElements).toHaveLength(2);
    expect(lessonElements[0]).toHaveTextContent('Lesson 1');
    expect(lessonElements[1]).toHaveTextContent('Lesson 2');
  });
});
