import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

declare global {
  interface Window {
    cloudinary: {
      openUploadWidget: (options: any, callback: any) => {
        open: () => void;
      }
    };
  }
}
