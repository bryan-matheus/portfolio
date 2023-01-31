import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

export function PersonalAvatar() {
  return (
    <Avatar.Root>
      <Avatar.Image
        className='hidden sm:block sm:w-8 sm:h-8 md:w-12 md:h-12 mr-8 rounded-full ease-in-out'
        src='me.png'
        alt='Bryan Matheus'/>
      <Avatar.Fallback className='w-12 h-12'>BM</Avatar.Fallback>
    </Avatar.Root>
  );
}
