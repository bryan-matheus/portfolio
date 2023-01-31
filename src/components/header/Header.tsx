'use client';

import React from 'react';
import {PersonalAvatar} from '@/components/common/PersonalAvatar';
import {LinkButton} from '@/components/common/LinkButton';
import Link from 'next/link';
import {Lead} from '@/components/header/Lead';
import {Nav} from '@/components/header/Nav';
import {Social} from '@/components/header/Social';

export function Header() {
  return (
    <header className='static flex flex-col justify-between w-full p-6 sm:p-8 md:max-w-md md:fixed md:h-screen lg:py-20 lg:pl-20 md:pr-16 lg:pr-0"'>
      <div className='flex flex-col'>
        <Lead/>
        {/* <Nav/> */}
        {/* <Social/> */}
      </div>
    </header>
  );
}
