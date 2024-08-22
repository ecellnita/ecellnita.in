import React from 'react';

import Image from 'next/image';

import Buildings from '~/assets/buildings.svg';

const Hero = () => {
  return (
    <section className='relative h-full w-full pt-28' id='hero'>
      <div className='flex flex-col mt-20'>
        <h1 className='title-gradient px-4 py-12 text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl lg:text-7xl'>
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
