'use client';

import React from 'react';

import Image from 'next/image';

import { cn } from '~/lib/utils';

import { type MotionProps, type Variants, motion } from 'framer-motion';

import Circle from '~/assets/circle.svg';

interface Props extends MotionProps {
  number?: string;
  title?: string;
  description?: string;
  imgCls?: string;
  className?: string;
  initial?: {
    x: number;
    y: number;
  };
}

export const AboutCard = ({
  title,
  description,
  imgCls,
  number,
  className,
  initial,
  ...props
}: Props) => {
  const variants: Variants = {
    initial: {
      ...initial,
      opacity: 0,
      perspective: '1200px',
    },
    animate: {
      x: 0,
      y: 0,
      perspective: '0px',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: 'linear',
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
      className={cn(
        'relative flex h-[18rem] flex-col overflow-hidden rounded-3xl border border-[#312B4C] bg-background p-5',
        className
      )}
      {...props}
    >
      <div className='card-grad1' />
      <div className='card-grad2' />
      <Image
        src={Circle as unknown as string}
        className={cn('absolute w-[24rem] rotate-[89deg]', imgCls)}
        alt='card'
      />
      <div className='z-[6] flex h-full flex-col justify-around gap-3'>
        {number && <Image src={number} className='h-12 w-12' alt='number' />}
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-semibold text-white'>{title}</h3>
          <p className='max-w-xs text-sm'>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const AboutCardLarge = ({
  title,
  className,
  initial,
  ...props
}: Props) => {
  const variants: Variants = {
    initial: {
      ...initial,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1,
        duration: 0.65,
        ease: 'linear',
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
      className={cn(
        'relative flex min-h-full basis-1/3 flex-col overflow-hidden rounded-3xl border border-[#312B4C] p-5',
        className
      )}
      {...props}
    >
      <div className='card-grad1' />
      <div className='card-grad2' />
      <Image
        src={Circle as unknown as string}
        className={cn(
          'absolute left-0 top-0 w-[24rem] -translate-x-1/3 -translate-y-1/2 rotate-[-135deg]'
        )}
        alt='card'
      />
      <Image
        src={Circle as unknown as string}
        className={cn(
          'absolute bottom-0 right-0 w-[24rem] translate-x-1/3 translate-y-1/2 rotate-0'
        )}
        alt='card'
      />
      <div className='z-[6] flex h-full flex-col justify-around gap-3'>
        <h3 className='text-center text-3xl font-semibold text-white sm:text-4xl'>
          {title}
        </h3>
      </div>
    </motion.div>
  );
};
