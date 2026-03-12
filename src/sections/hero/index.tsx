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
        <div className='mx-4 mt-8 w-full max-w-3xl rounded-2xl border border-[#2b2e58] bg-[linear-gradient(135deg,rgba(11,13,40,0.82),rgba(31,16,67,0.65))] p-5 shadow-[0_18px_45px_-28px_rgba(99,68,245,0.95)] backdrop-blur-md sm:p-7'>
          <div className='mb-4 inline-flex rounded-full border border-[#4e58c9] bg-[#1f224f]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#c8ceff]'>
            Live Event
          </div>
          <h2 className='text-2xl font-semibold text-white sm:text-3xl'>
            StartupKumbh Is Live
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-sm text-[#cbcbe8bf] sm:text-base'>
            Join our flagship startup event and explore opportunities to build,
            pitch, and connect with innovators.
          </p>
          <div className='mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row'>
            <Button asChild variant='primary' className='w-full px-6 sm:w-auto'>
              <Link href='/startupkumbh'>Visit StartupKumbh</Link>
            </Button>
            <Button asChild variant='nav' className='w-full px-6 sm:w-auto'>
              <Link href='/events'>Explore Events</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
