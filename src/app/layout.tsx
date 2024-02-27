import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ToastContainer } from 'react-toastify';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Linguaphile',
  description: 'An AI-powered language learning platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <header className='sticky top-0 z-50 bg-base-200 shadow-md'>
          <NavBar />
        </header>
        <main className='h-[calc(100vh-64px)] lg:h-[calc(100vh-76px)]'>
          {children}
        </main>
        <ToastContainer position='bottom-right' theme='dark' />
      </body>
    </html>
  );
}
