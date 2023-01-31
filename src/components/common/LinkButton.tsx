import React from 'react';
import Link from 'next/link';
import {type ReactNode} from 'react';
import {Kbd} from '@/components/common/Kbd';

type Props = {
  href: string;
  children: ReactNode;
  tipLetter?: string;
};

export function LinkButton(props: Props) {
  const {href, tipLetter, children} = props;

  return (
    <Link href={href} target='_blank' className='flex gap-2 flex-row items-center align-middle text-neutral-50'>
      {children}
      {tipLetter && <Kbd>{tipLetter}</Kbd>}
    </Link>
  );
}
