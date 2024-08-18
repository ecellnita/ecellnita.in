'use client';

import React from 'react';

import { type Variants, motion } from 'framer-motion';

const Lights = () => {
  const backgrounds: Record<string, string> = {
    bg0: 'linear-gradient(rgba(2, 3, 28, 0) 19.5132%, rgba(134, 91, 255, 0.8) 100%)',
    bg1: 'linear-gradient(rgba(2, 3, 28, 0) 19.5132%, rgba(213, 199, 255, 0.4) 100%)',
    bg2: 'linear-gradient(rgba(2, 3, 28, 0) 19.5132%, rgba(134, 91, 255, 0.5) 100%)',
  };

  const getVariants = (index: number) => {
    const variants: Variants = {
      initial: {
        opacity: 1,
        y: -200,
      },
      animate: {
        opacity: 0,
        y: 100 + index * 60,
        transition: {
          repeat: Infinity,
          type: 'tween',
          repeatDelay: Math.round(Math.random() * 2) + 2,
          repeatType: 'loop',
          delay: index * Math.round(Math.random() * 2) + 2,
          duration: 2,
        },
      },
    };
    return variants;
  };

  return (
    <div className='flex w-full flex-row justify-start'>
      <div className='flex w-full max-w-xl flex-row justify-around'>
        {Array(3)
          .fill(true)
          .map((_e, i) => {
            return (
              <motion.div
                variants={getVariants(i)}
                initial='initial'
                animate='animate'
                key={i}
                className='h-20 w-[3px]'
                style={{
                  background: backgrounds[`bg${i}`],
                }}
              />
            );
          })}
      </div>
      <div className='flex w-full max-w-xl flex-row-reverse justify-around'>
        {Array(3)
          .fill(true)
          .map((_e, i) => {
            return (
              <motion.div
                variants={getVariants(i)}
                initial='initial'
                animate='animate'
                key={i}
                className='h-20 w-[1px]'
                style={{
                  background: backgrounds[`bg${i}`],
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Lights;
