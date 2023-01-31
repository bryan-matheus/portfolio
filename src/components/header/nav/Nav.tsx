import React from 'react';
import {NavItem} from '@/components/header/nav/NavItem';

export function Nav() {
  return (
    <nav className='hidden text-sm font-bold uppercase text-widest mt-16 md:block'>
      <ul className='flex flex-row md:flex-col md:-my-4'>
        <NavItem href='#projects' label='Projects' kbd='P'/>
        <NavItem href='#technologies' label='Technologies' kbd='T'/>
        <NavItem href='#contact' label='Contact' kbd='C'/>
      </ul>
    </nav>
  );
}
