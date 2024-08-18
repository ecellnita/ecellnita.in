import React from 'react';

import Image from 'next/image';

import { About, Contact, Hero } from '~/sections';

import Lights from '~/components/navbar/Lights';

import CubesBackground from '~/assets/cube.svg';
import StripsBackground from '~/assets/strips.svg';

const Home = () => {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute left-1/2 top-0 z-[-2] mx-auto w-full max-w-screen-lg -translate-x-1/2'>
        <Image
          src={StripsBackground as unknown as string}
          alt='StripsBackground'
          className='z-[-1] h-full w-full object-cover'
        />
        <div className='absolute right-1/2 top-0 w-full max-w-screen-lg translate-x-1/2 '>
          <Lights />
        </div>
      </div>
      <div className='relative min-h-screen overflow-y-hidden text-center sm:h-screen'>
        <div className='absolute top-0 overflow-y-hidden'>
          <Image
            src={CubesBackground as unknown as string}
            alt='Cubes Background'
            className='h-[50dvh] w-full translate-y-1/4 overflow-y-hidden object-cover md:h-[160dvh] md:-translate-y-1/4'
          />
        </div>
        <Hero />
      </div>
      <About />
      <Contact />
    </div>
  );
};

export default Home;
