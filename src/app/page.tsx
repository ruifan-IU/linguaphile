import Link from "next/link";
import { db } from "@/lib/db";

export default async function Home() {
  console.log("here");
  const lessons = await db.lesson.findMany();
  console.log(lessons);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson: { text: string; id: string }, index: number) => (
          <div
            key={lesson.id}
            className="max-h-40 max-w-xs rounded-box bg-base-200 p-6 shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-bold">Lesson {index + 1}</h2>
            <p className="line-clamp-3">{lesson.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
