import Link from 'next/link';

export default function Home() {
  console.log('here');
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='p-10'>
        <button className='btn btn-primary'>Button</button>
      </div>
    </main>
  );
}