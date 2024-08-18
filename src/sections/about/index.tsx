import React from 'react';

import Four from '~/assets/four.svg';
import One from '~/assets/one.svg';
import Three from '~/assets/three.svg';
import Two from '~/assets/two.svg';

import { AboutCard, AboutCardLarge } from './AboutCard';

const About = () => {
  return (
    <section
      className='z-[10] flex h-full min-h-screen flex-col items-center justify-center gap-12 py-12'
      id='about'
    >
      <div className='flex flex-col gap-2 py-6 text-center'>
        <h2 className='title-gradient z-[2] text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl'>
          Launch with{' '}
          <span
            className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
            style={{
              backgroundImage:
                'url(https://framerusercontent.com/images/bTF3xblyn2uyR2rZCo89tUf9mVE.svg)',
            }}
          >
            Confidence
          </span>
        </h2>
        <p className='mx-auto max-w-sm px-2 text-center text-xs sm:text-base md:text-lg lg:max-w-4xl'>
          Gain the skills and support you need to confidently launch your
          startup with the E-Cell.
        </p>
      </div>
      <div className='flex w-full max-w-screen-xl flex-col gap-4 bg-background lg:flex-row'>
        <div className='flex w-full basis-1/3 flex-col gap-5'>
          <AboutCard
            imgCls='right-0 top-0 rotate-[89deg] -translate-y-1/2 translate-x-2/3'
            title='Idea Ignition'
            description={` Don't let your brilliant idea stay dormant. E-Cell provides a stimulating environment to spark your entrepreneurial spirit. We'll help you refine your concept, develop a roadmap, and transform your vision into a tangible action plan.`}
            number={One as unknown as string}
            initial={{
              x: -30,
              y: -30,
            }}
          />
          <AboutCard
            imgCls='hidden'
            title='Collaborative Spirit'
            description={`Innovation thrives in a supportive community. E-Cell connects you with like-minded individuals, fostering a network of collaboration, learning, and growth.`}
            number={Two as unknown as string}
            initial={{
              x: -30,
              y: 30,
            }}
          />
        </div>
        <AboutCardLarge
          imgCls='hidden'
          title='Values Powering Your Entrepreneurial Journey'
          initial={{
            x: 30,
            y: -30,
          }}
        />
        <div className='flex w-full basis-1/3 flex-col gap-5'>
          <AboutCard
            imgCls='hidden'
            title='Resourceful Network'
            description={`Resources are the fuel of your startup journey. E-Cell equips you with everything you need to launch and scale. Access workshops, funding opportunities, industry connections, and valuable tools - all designed to propel your startup forward.`}
            number={Three as unknown as string}
            initial={{
              x: 30,
              y: -30,
            }}
          />
          <AboutCard
            imgCls='left-0 bottom-0 translate-y-1/2 -translate-x-2/3 rotate-0'
            title='Impactful Change'
            description={`We believe entrepreneurship is a powerful force for positive change. E-Cell supports ventures that address real-world challenges and create a lasting impact on society. `}
            number={Four as unknown as string}
            initial={{
              x: 30,
              y: 30,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
