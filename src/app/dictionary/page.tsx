import { db } from '@/lib/db';

export default async function Dictionary() {
  const words = await db.word.findMany();

  return (
    <div className='flex flex-col items-center p-10 lg:h-[calc(100vh-76px)]'>
      <h1 className='text-4xl font-bold'>Your Words</h1>
      <div className='mt-10 rounded-box border border-base-300 p-5 sm:w-11/12 md:w-9/12 lg:w-6/12'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th>Word</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word) => (
              <tr key={word.id}>
                <td>{word.phrase}</td>
                <td>{word.translation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
