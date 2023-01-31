import React from 'react';
import {Header} from '@/components/header/Header';

export default function Home() {
  return (
    <div className='relative flex flex-col w-screen mx-auto font-sans max-w-1440 md:flex-row'>
      <Header/>
      <main/>
    </div>
  );
}
