import {PersonalAvatar} from '@/components/common/PersonalAvatar';
import {LinkButton} from '@/components/common/LinkButton';
import React from 'react';

export function Social() {
  return (
    <section>
      <PersonalAvatar/>
      <LinkButton href='https://github.com/bryan-matheus' tipLetter='G'>
        GitHub
      </LinkButton>
    </section>
  );
}
