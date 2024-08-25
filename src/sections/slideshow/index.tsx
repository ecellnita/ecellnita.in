'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from './Carousel';

const slides: string[] = [
    "/photos/events/1.jpg",
    "/photos/events/2.jpg",
    "/photos/events/3.jpg",
    "/photos/events/4.jpg",
    "/photos/events/5.jpg",
    "/photos/events/6.jpg",
    "/photos/events/7.jpeg",
    "/photos/events/8.png",
]

const ImageSlideShow = () => {
  return (
    <section
      className='z-[10] flex h-full min-h-screen flex-col items-center justify-center gap-12 py-12'
      id='speakers'
    >
      <div className='flex justify-center items-center flex-col w-full'>
        <h2 className='title-gradient z-[2] text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl my-5'>
            Gallery{' '}
        </h2>
        <h3 className='title-gradient z-[2] mb-10 text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl my-5'>
          <span
            className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
            style={{
              backgroundImage:
                'url(https://framerusercontent.com/images/bTF3xblyn2uyR2rZCo89tUf9mVE.svg)',
            }}
          >
            A Photogenic Memory
          </span>
        </h3>
        <div className='flex justify-between items-center w-full mt-10'>
            <Carousel autoSlide={true}>
                {[...slides.map((s, i) => (
                    <Image key={i} src={s} width={1200} height={1000} alt='gallery' />
                ))]}
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ImageSlideShow;
