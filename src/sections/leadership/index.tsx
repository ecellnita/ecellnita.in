import React from 'react';

import { executives } from '~/lib/data';

import { LeadershipCard } from '~/components';

import TeamSelect from './TeamSelect';

const Leadership = () => {
  return (
    <section
      id='leadership'
      className='flex flex-col items-center justify-center space-y-12 py-12'
    >
      <h2 className='title-gradient z-[2] text-[2.5rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl'>
        Our{' '}
        <span
          className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
          style={{
            backgroundImage:
              'url(https://framerusercontent.com/images/U6UbhIrFD2OnmiS03kViwM0Qb8.svg)',
          }}
        >
          Leadership
        </span>
      </h2>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {executives.map((executive) => (
          <LeadershipCard key={executive.name} {...executive} />
        ))}
      </div>
      <TeamSelect />
    </section>
  );
};

export default Leadership;
