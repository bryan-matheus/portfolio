import Link from 'next/link';
import React from 'react';

export function Nav() {
  return (
    <nav className='hidden text-sm font-bold uppercase text-widest mt-16 md:block'>
      <ul className='flex flex-row md:flex-col md:-my-4'>
        <li className='md:my-2'>
          <Link href='src/components#projects' className='inline-flex items-center ease-linear group'>
            <span className='inline-block w-6 h-px mx-2 -mt-px group-hover:w-12 bg-neutral-500 group-hover:bg-neutral-50 ease-linear'/>
            <span className='text-xs tracking-widest uppercase'>Projects</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
