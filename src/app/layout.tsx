import React, {type ReactNode} from 'react';
import './globals.css';
import {Inter} from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props) {
  const {children} = props;

  return (
    <html lang='en'>
      <head/>
      <body className={`${inter.className} bg-neutral-900 text-neutral-500 text-sm antialiased`}>
        <div className='relative flex flex-col w-screen mx-auto font-sans max-w-screen-xl md:flex-row'>
          {children}
        </div>
      </body>
    </html>
  );
}
