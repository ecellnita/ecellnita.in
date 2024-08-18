import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import type { ExecutiveProps } from '~/types';

const LeadershipCard = ({ name, image, position, socials }: ExecutiveProps) => {
  const { name: socialName, link } = socials;
  return (
    <div className='relative h-[24rem] w-[20rem] overflow-hidden rounded-[20px] sm:h-[24rem] sm:w-[20rem]'>
      <Image
        src={`/photos/executives/${image}`}
        width={320}
        height={480}
        alt={`${name} Profile Photo`}
        className='object-cover w-full h-full'
      />
      <div className='leadership-cover absolute bottom-0 z-[3] flex w-full flex-row items-start justify-between px-8 py-4 text-white'>
        <div className='flex flex-col'>
          <div className='text-lg'>{name}</div>
          <div className='text-sm text-white/70'>{position}</div>
        </div>
        <div className='text-white/85'>
          {socialName === 'email' && (
            <Link href={link} target='_blank'>
              <Mail size={24} />
            </Link>
          )}
          {socialName === 'twitter' && (
            <Link href={link} target='_blank'>
              <Twitter size={24} />
            </Link>
          )}
          {socialName === 'instagram' && (
            <Link href={link} target='_blank'>
              <Instagram size={24} />
            </Link>
          )}
          {socialName === 'linkedin' && (
            <Link href={link} target='_blank'>
              <Linkedin size={24} />
            </Link>
          )}
        </div>
      </div>
      <div className='leadership-cover absolute bottom-3 z-[2] flex w-full -rotate-[15deg] items-start justify-end p-12'></div>
      <div className='leadership-cover absolute bottom-3 z-[1] w-full rotate-[15deg] p-12'></div>
    </div>
  );
};

export default LeadershipCard;
