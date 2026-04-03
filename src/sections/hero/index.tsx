import React from 'react';

import Link from 'next/link';

import { Button } from '~/components/ui/button';

const Hero = () => {
  return (
    <section className='relative h-full w-full pt-48 md:pt-52' id='hero'>
      <div className='mx-auto flex max-w-5xl flex-col items-center text-center'>
        <h1 className='title-gradient px-4 py-10 text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl lg:text-7xl'>
          <span
            className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
            style={{
              backgroundImage:
                'url(https://framerusercontent.com/images/U6UbhIrFD2OnmiS03kViwM0Qb8.svg)',
            }}
          >
            Entrepreneurship Cell
          </span>
          <br />
          NIT Agartala
        </h1>
        <p className='mx-auto max-w-sm px-2 text-center text-xs sm:text-base md:text-lg lg:max-w-4xl'>
          From brainstorming to pitch deck, Entrepreneurship Cell, NIT Agartala
          equips you with the tools and guidance you need to launch your
          disruptive idea and thrive.
        </p>
        
      </div>
    </section>
  );
};

export default Hero;
