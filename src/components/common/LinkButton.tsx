import React from 'react';
import Link from 'next/link';
import {type ReactNode} from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

export function LinkButton(props: Props) {
  const {href, children} = props;

  return (
    <Link href={href} target='_blank' className='flex items-center'>
      {children}
    </Link>
  );
}
