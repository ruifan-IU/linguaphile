import Link from 'next/link';
import ThemeSelector from './components/ThemeSelector';
import { db } from '@/lib/db';

export default async function Home() {
  console.log('here');
  const text = await db.texts.findFirst();
  console.log(text);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='p-10'>
        <ThemeSelector />
        <button className='btn btn-primary'>Button</button>
      </div>
    </main>
  );
}
