import React, {type ReactNode} from 'react';

type Props = {
  children?: ReactNode;
};

export function Kbd(props: Props) {
  return (
    <kbd className='px-[4px] py-[2px] leading-none font-normal rounded border-2 border-neutral-500 bg-neutral-800 text-neutral-50 text-sm'>
      {props.children}
    </kbd>
  );
}
