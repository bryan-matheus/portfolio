import {PersonalAvatar} from '@/components/common/PersonalAvatar';
import React from 'react';
import {ExternalLinkIcon, GitHubLogoIcon, LinkedInLogoIcon} from '@radix-ui/react-icons';
import Link from 'next/link';

export function Social() {
  return (
    <section className='flex items-center w-full mt-8 md:mt-16'>
      <PersonalAvatar/>
      <ul className='flex -mx-4 text-neutral-50'>
        <li className='mx-4'>
          <Link href='https://www.linkedin.com/in/bryan-matheus/' className='flex items-center' rel='noopener noreferrer' target='_blank'>
            <LinkedInLogoIcon className='w-4 h-4 mr-4 fill-current'/>
            <span className='mt-px'>LinkedIn</span>
            <div className='w-4 p-[2px] ml-2'>
              <ExternalLinkIcon className='w-4 h-4 mr-4 fill-current'/>
            </div>
          </Link>
        </li>
        <li className='mx-16'>
          <Link href='https://www.github.com/bryan-matheus/' className='flex items-center' rel='noopener noreferrer' target='_blank'>
            <GitHubLogoIcon className='w-4 h-4 mr-4 fill-current'/>
            <span className='mt-px'>GitHub</span>
            <div className='w-4 p-[2px] ml-2'>
              <ExternalLinkIcon className='w-4 h-4 mr-4 fill-current'/>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
