import React from 'react';

export function Lead() {
  return (
    <div>
      <section>
        <h1 className='text-5xl font-bold leading-tight lg:text-6xl lg:leading-none text-neutral-50'>
          Bryan Matheus
        </h1>
        <h2 className='mt-4 sm:text-lg text-2xl font-semibold leading-tight text-neutral-50'>
          Front-end Engineer
        </h2>
      </section>
      <section className='leading-loose'>
        <p className='mt-6'>
          I am a skilled Front-end Engineer with expertise in JavaScript, TypeScript, React.js, and Node.js. I have a
          passion for creating visually appealing and user-friendly web applications.
        </p>
        <p className='mt-4'>In my spare time, I enjoy going for walks with my dog and exploring new shopping opportunities.</p>
      </section>
    </div>
  );
}
