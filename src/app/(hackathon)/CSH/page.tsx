'use client';

import React from 'react';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { cn } from '~/lib/utils';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import DITLogo from 'public/photos/logo/dit-logo.png';
import NITALogo from 'public/photos/logo/nita-logo.png';
import CyberLogo from 'public/photos/logo/cybersecuritycampaign.png';

import Footer from '~/components/CSH/footer';
import Hero from '~/components/CSH/landingPage/hero';
import ProblemStatements from '~/components/CSH/landingPage/problemStatements';
import Timeline from '~/components/CSH/landingPage/timeline';
import CSHAbout from '~/components/CSH/landingPage/about';
import { saveAs } from 'file-saver';

const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn('relative mx-auto h-full w-full', className)}
    >
      <div className='absolute '>
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? 'none'
                : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
          className='ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-neutral-200 shadow-sm'
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? 'white' : '#10b981',
              borderColor: scrollYProgress.get() > 0 ? 'white' : '#059669',
            }}
            className='h-2 w-2 rounded-full border border-neutral-300 bg-white'
          />
        </motion.div>
        <svg
          viewBox={`0 0 40 ${svgHeight}`}
          width='40'
          height={svgHeight}
          className=' ml-4 block'
          aria-hidden='true'
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill='none'
            stroke='#090810'
            strokeOpacity='0.80'
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill='none'
            stroke='url(#gradient)'
            strokeWidth='1.25'
            className='motion-reduce:hidden'
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id='gradient'
              gradientUnits='userSpaceOnUse'
              x1='0'
              x2='0'
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor='#18CCFC' stopOpacity='0'></stop>
              <stop stopColor='#18CCFC'></stop>
              <stop offset='0.325' stopColor='#6344F5'></stop>
              <stop offset='1' stopColor='#AE48FF' stopOpacity='0'></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const timelineEntry: TimelineEntry[] = [
  {
    title: '7th Nov',
    content: `Release of problem statements and Starting of Registration: Welcome to the start of an exciting journey! Register your team, review the event guidelines, and familiarize yourself with the hackathon format.`,
  },
  {
    title: '9th Nov',
    content: `Submission of presentation starts`,
  },
  {
    title: '17th Nov',
    content: `Closing of Registration: The real test begins! Use this opportunity to showcase your problem-solving abilities and creativity in the field of cybersecurity.`,
  },
  {
    title: '18th Nov',
    content: `FINALISTS FOUND: The top 5 shall be announced as finalists,  so be ready with your tools and best skills to lock in that win!`,
  },
  {
    title: '19th Nov',
    content: `Grand Finale: Congratulations to the finalists! In the Grand Finale, top teams must get ready to build their solutions to the given advanced, real-time cybersecurity challenges and present them in front of the panel of experts.`,
  },
];

function page() {
  return (
    <div className='relative w-full overflow-hidden bg-[#0D0628] bg-cover bg-center'>
      <TracingBeam className=''>
        <div className="relative w-full overflow-hidden bg-[#0D0628] bg-[url('/photos/ieif/ieif-bg.png')] bg-cover bg-center px-2 md:px-8">
          <div className='mx-auto flex-col md:flex-row flex w-[95%] md:w-[85%] max-w-screen-2xl items-center justify-between pt-12 mb-28'>
            <div className='flex justify-start items-center my-4'>
              <Image src={DITLogo} className='md:w-28 md:h-28 w-12 h-12' alt='DIT Logo' />
              <div className='ml-4 text-sm md:text-[1rem]'>
                Supported by <br />
                Directorate of Information Technology,<br />
                Govt. of Tripura
              </div>
            </div>

            <div className='flex flex-col justify-start items-center my-4'>
              <Image src={CyberLogo} className='md:w-44 md:h-28 w-24 h-12' alt='DIT Logo' />
              <span className='underline text-red-500 italic my-2 cursor-pointer' onClick={()=>saveAs('/CSH/poster.png', 'poster.png')}>Download Poster</span>
            </div>

            <div className='flex justify-start items-center my-4'>
              <div className='mr-4 text-sm md:text-[1rem]'>
                Organized by <br />
                National Institute of Technology,<br />
                Agartala
              </div>
              <Image src={NITALogo} className='md:w-28 md:h-28 w-12 h-12' alt='NITA Logo' />
            </div>
          </div>
          <TracingBeam className=''>
            <Hero />
            <CSHAbout/>
            <ProblemStatements />
          </TracingBeam>
        </div>
        <Timeline data={timelineEntry} />
      </TracingBeam>
      <Footer />
    </div>
  );
}

export default page;
