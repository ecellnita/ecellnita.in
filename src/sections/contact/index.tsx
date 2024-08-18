import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '~/components/ui/button';

import ContactPattern from '~/assets/pattern-contact.svg';

const Contact = () => {
  return (
    <section
      id='contact'
      className='relative flex h-screen flex-col items-center justify-center'
    >
      <Image
        src={ContactPattern as unknown as string}
        alt='contact Pattern'
        className='absolute !z-[3]'
      />
      <div className='flex flex-col items-center justify-center gap-6 text-center'>
        <div className='title-gradient py-2 text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-5xl'>
          Join us and let&apos;s get started{' '}
        </div>
        <p className='mx-auto max-w-sm px-2 text-center text-xs sm:text-base md:text-base lg:max-w-4xl'>
          Become a part of our community and embark on your journey as we guide
          you through the process of getting started and achieving your goals
          together
        </p>
        <Button
          variant='primary'
          className='z-[6] bg-background px-12 transition-all duration-500 ease-in'
        >
          <Link href='mailto:ecellnita@gmail.com'>Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
