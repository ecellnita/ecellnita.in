import React from 'react';

import Image from 'next/image';

import EventsHeaderImage from '~/assets/events-header.svg';

const EventsHeader = () => {
  return (
    <div className='relative w-full'>
      <Image
        src={EventsHeaderImage as unknown as string}
        className='absolute left-1/2 top-0 z-0 w-full -translate-x-1/2 -translate-y-1/3 scale-125'
        height={1200}
        width={1448}
        alt='Events Header'
      />
      <div className='flex h-full w-full items-center justify-center text-center'>
        <div className='flex flex-col gap-2 py-6 text-center'>
          <h2 className='title-gradient z-[2] py-1 text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl'>
            Making{' '}
            <span
              className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
              style={{
                backgroundImage:
                  'url(https://framerusercontent.com/images/bTF3xblyn2uyR2rZCo89tUf9mVE.svg)',
              }}
            >
              Ideas
            </span>{' '}
            Happen
          </h2>
          <p className='mx-auto max-w-sm px-2 text-center text-xs sm:text-base md:text-lg lg:max-w-4xl'>
            Get a glimpse of our past initiatives and the impact they&lsquo;ve
            made.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsHeader;
