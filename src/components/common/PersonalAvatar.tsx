import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

export function PersonalAvatar() {
  return (
    <Avatar.Root>
      <Avatar.Image
        className='w-12 h-12 rounded-full'
        src='https://avatars.githubusercontent.com/u/39971756?v=4'
        alt='Bryan Matheus'/>
      <Avatar.Fallback>BM</Avatar.Fallback>
    </Avatar.Root>
  );
}
