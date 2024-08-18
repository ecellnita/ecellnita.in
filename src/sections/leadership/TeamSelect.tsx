'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useTeamStore } from '~/lib/stores';
import { cn } from '~/lib/utils';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import { Teams } from '~/types';

const TeamSelect = () => {
  const { activeTeam, setActiveTeam, members } = useTeamStore();

  return (
    <div className='mx-auto my-6 flex w-full max-w-screen-xl flex-col'>
      <div className='border hide-scrollbar mx-auto flex w-full max-w-xs flex-row items-center overflow-x-scroll rounded-full p-1 shadow-sm sm:max-w-sm md:max-w-md lg:max-w-lg'>
        {Teams.map((team) => {
          return (
            <div className='relative' key={team.key}>
              {activeTeam === team.key && (
                <motion.div
                  layout
                  layoutId='team-select'
                  className='radial-btn-bg radial-btn absolute top-0 h-full w-full'
                />
              )}
              <button
                className={cn(
                  'inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
                )}
                onClick={() => setActiveTeam(team.key)}
              >
                {team.name}
              </button>
            </div>
          );
        })}
      </div>
      <motion.div
        className='flex flex-row flex-wrap items-center justify-center gap-4 py-16 sm:gap-8'
        layout
      >
        {members.map((member) => {
          const {
            name,
            image,
            position,

            socials: { name: socialName, link },
          } = member;
          return (
            <motion.div
              layout
              key={image}
              className='relative h-[18rem] w-[14rem] overflow-hidden rounded-2xl'
            >
              <Image
                src={`/photos/members/${image}`}
                width={320}
                height={480}
                className='h-full w-full rounded-2xl object-cover'
                alt={`${name} Profile Photo`}
              />
              <div className='leadership-cover absolute bottom-0 w-full rounded-2xl p-4'>
                <div className='flex flex-row items-start justify-between'>
                  <div className='flex flex-col'>
                    <div className='text-lg text-white'>{name}</div>
                    <div className='text-sm text-white/70'>{position}</div>
                  </div>
                  <div className='text-white/85'>
                    {socialName === 'email' && (
                      <Link href={link}>
                        <Mail size={24} />
                      </Link>
                    )}
                    {socialName === 'twitter' && (
                      <Link href={link}>
                        <Twitter size={24} />
                      </Link>
                    )}
                    {socialName === 'instagram' && (
                      <Link href={link}>
                        <Instagram size={24} />
                      </Link>
                    )}
                    {socialName === 'linkedin' && (
                      <Link href={link}>
                        <Linkedin size={24} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TeamSelect;
