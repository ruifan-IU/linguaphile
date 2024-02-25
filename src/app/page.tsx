import Link from "next/link";
import { db } from "@/lib/db";

export default async function Home() {
  const lessons = await db.lesson.findMany();

  return (
    <main
      className="h-[calc(100vh-64px)] lg:h-[calc(100vh-76px)] flex flex-col items-center justify-between p-10"
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson: { text: string; id: string }, index: number) => (
          <Link
            key={lesson.id}
            className="p-6 bg-base-200 rounded-box shadow-lg max-w-xs max-h-40"
            href={`/lesson/${lesson.id}`}
          >
            <h2 className='mb-4 text-2xl font-bold'>Lesson {index + 1}</h2>
            <p className='line-clamp-3'>{lesson.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
