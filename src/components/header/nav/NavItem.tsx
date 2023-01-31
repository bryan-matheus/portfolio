import Link from 'next/link';
import {Kbd} from '@/components/common/Kbd';
import React from 'react';

type Props = {
  href: string;
  label: string;
  kbd?: string;
};

export function NavItem(props: Props) {
  const {href, label, kbd} = props;

  return (
    <li className='md:my-4'>
      <Link href={href} className='inline-flex items-center hover:text-neutral-50 transition group text-neutral-500'>
        <span className='inline-block w-6 h-px mx-2 -mt-px group-hover:w-12 bg-neutral-500 group-hover:bg-neutral-50 transition w-12 bg-neutral-500'/>
        <span className='text-xs tracking-[3px] uppercase font-normal mr-2'>{label}</span>
        <Kbd>{kbd}</Kbd>
      </Link>
    </li>
  );
}
