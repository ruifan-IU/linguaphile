import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/Lesson/LessonModal/NavBar/NavBar';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ToastContainer } from 'react-toastify';
import StoreProvider from './StoreProvider';
import { enableMapSet } from 'immer';
import { getServerSession } from 'next-auth';
import { authOptions } from './utils/auth';

enableMapSet();

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Polyglot-AI',
  description: 'An AI-powered language learning platform',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className={`${inter.className} bg-emerald-50`}>
        <StoreProvider>
          <header className='sticky top-0 z-50 shadow-md'>
            <NavBar session={session} />
          </header>
          <main className='h-[calc(100vh-5rem)]'>
            {children}
          </main>
          <ToastContainer position='bottom-right' theme='dark' />
        </StoreProvider>
      </body>
    </html>
  );
}
