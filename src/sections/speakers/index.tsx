'use client';

import React, { useState } from 'react';

import Image from 'next/image';

const allSpeakers = [
  {
    id: 1,
    name: 'Ishan Sharma',
    role: 'Co-founder Markitup',
  },
  {
    id: 2,
    name: 'Anubhab Dubey',
    role: 'Co-founder Chai Sutta Bar',
  },
  {
    id: 3,
    name: 'Aman Dhattarwal',
    role: 'Founder Apna College',
  },
  {
    id: 4,
    name: 'Yash Garg',
    role: 'Founder College Setu',
  },
  {
    id: 5,
    name: 'Shradha Khapra',
    role: 'Co-founder Apna College',
  },
];

const Speakers = () => {
  const [hoveredElement, setHoveredElement] = useState({
    name: '',
  });
  return (
    <section
      className='z-[10] flex h-full min-h-screen flex-col items-center justify-center gap-12 py-12'
      id='speakers'
    >
      <div className='flex w-full flex-col items-center justify-center'>
        <h2 className='title-gradient z-[2] my-5 text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl'>
          Iconic{' '}
          <span
            className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
            style={{
              backgroundImage:
                'url(https://framerusercontent.com/images/bTF3xblyn2uyR2rZCo89tUf9mVE.svg)',
            }}
          >
            Speakers
          </span>
        </h2>
        <p className='mx-auto max-w-sm px-2 text-center text-xs sm:text-base md:text-lg lg:max-w-4xl'>
          Explore the impactful speakers who have imparted their wisdom and
          insights at E-Cell events, fueling the entrepreneurial spirit.
        </p>
        <div className='mt-10 flex w-full flex-col items-center justify-between md:w-[80%] md:flex-row'>
          {allSpeakers.map((speaker, i) => {
            return (
              <div
                key={i}
                className='my-4 flex h-[35svh] w-[60%] cursor-pointer flex-col items-center justify-center rounded-md bg-[#34245c] p-4 transition-all md:w-[17%]'
                style={{
                  backgroundImage:
                    hoveredElement.name === speaker.name
                      ? `url(/photos/speakers/${speaker.id}.jpg)`
                      : '',
                  backgroundSize: 'cover',
                  opacity: hoveredElement.name === speaker.name ? 0.8 : 1,
                }}
                onMouseEnter={() => setHoveredElement({ name: speaker.name })}
                onMouseLeave={() => setHoveredElement({ name: '' })}
              >
                {hoveredElement.name !== speaker.name && (
                  <>
                    <Image
                      src={`/photos/speakers/${speaker.id}.jpg`}
                      width={120}
                      height={120}
                      alt={speaker.name}
                      className='rounded-full'
                    />
                    <div className='mt-4 flex flex-col items-center justify-center'>
                      <h5 className='text-lg font-bold'>{speaker.name}</h5>
                      <p className='text-sm'>{speaker.role}</p>
                    </div>
                  </>
                )}

                {hoveredElement.name === speaker.name && (
                  <>
                    <div className='mt-4 flex flex-col items-center justify-center'>
                      <h5 className='text-lg font-bold text-white'>
                        {speaker.name}
                      </h5>
                      <p className='text-sm text-white'>{speaker.role}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
