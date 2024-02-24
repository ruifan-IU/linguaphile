import { db } from "@/lib/db";
import { LessonDisplay } from "../../components/LessonDisplay";

export default async function Lesson({ params }: { params: { id: string } }) {
  const lesson = await db.lesson.findUnique({
    where: {
      id: params.id,
    },
  });

  return lesson ? (
    <LessonDisplay text={lesson.text} />
  ) : (
    <div>
      <h1>Lesson not found</h1>
    </div>
  );
}
