'use client';

import React from 'react';
import {Lead} from '@/components/header/Lead';
import {Nav} from '@/components/header/nav/Nav';
import {Social} from '@/components/header/Social';

export function Header() {
  return (
    <header className='static flex flex-col justify-between w-full p-6 sm:p-8 md:max-w-[488px] md:fixed md:h-screen lg:py-20 lg:pl-20 md:pr-16 lg:pr-0'>
      <div className='flex flex-col'>
        <Lead/>
        <Nav/>
      </div>
      <Social/>
    </header>
  );
}
