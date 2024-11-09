'use client';

import { useRouter } from 'next/navigation';

// import Image from "next/image"
import HeroText from './hackathontext';

export default function Hero() {
  const router = useRouter();

  return (
    <div className='flex h-[40svh] w-full items-center justify-center'>
      <div className='flex w-[80%] items-center justify-between'>
        {/* <Image src='/photos/ieif/hero-cyber-graphics.png' alt="hero-cyber-graphics" width={450} height={450} /> */}
        <div>
          <HeroText />
        </div>
        <div className='ml-8 flex w-[50%] flex-col items-start justify-between'>
          <h1 className='mb-2 text-6xl font-bold text-white'>
            Join The Cyber Security Hackathon
          </h1>
          <p className='mb-6 mt-4'>
            Welcome to the Cyber Security Hackathon, hosted by E-Cell NIT
            Agartala with IICES and DIT! This event is a unique challenge for
            top minds to tackle real-world cybersecurity threats. Whether you’re
            a coder, ethical hacker, or tech enthusiast, join us to collaborate,
            innovate, and compete for rewards. Gain hands-on experience, learn
            from industry leaders, and make your mark in the cybersecurity
            arena.
          </p>
          <button
            className='rounded-lg bg-white px-4 py-2 font-semibold text-gray-700 z-10'
            onClick={() => router.push('/CSH/registration')}
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
