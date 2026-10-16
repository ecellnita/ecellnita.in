import React from 'react';

import BlogList from '~/components/Blog/BlogList';
import ScrollToTopButton from '~/components/Blog/ScrollToTopButton';

function page() {
  return (
    <div className='relative min-h-screen'>
      {/* Ambient top glow — matches home page */}
      <div className='absolute inset-x-0 top-0 -z-[1] h-64 bg-[radial-gradient(50%_90%_at_50%_0%,rgba(99,68,245,0.18)_0%,rgba(99,68,245,0)_100%)]' />

      {/* Hero */}
      <div className='pt-36 pb-12 text-center'>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          <h1 className='title-gradient text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl'>
            The
          </h1>
          <h1
            className='bg-cover bg-clip-text bg-center bg-no-repeat text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl'
            style={{
              backgroundImage:
                'url(https://framerusercontent.com/images/bTF3xblyn2uyR2rZCo89tUf9mVE.svg)',
            }}
          >
            Entrepreneurial
          </h1>
          <h1 className='title-gradient text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl'>
            Horizon
          </h1>
        </div>
        <p className='mx-auto mt-5 max-w-2xl px-4 text-sm leading-relaxed text-[#8b8fb3] sm:text-base md:text-lg'>
          "Inspiring Ideas, Stories, and Strategies for Tomorrow's Leaders."
        </p>
      </div>

      {/* Blog cards */}
      <BlogList />

      {/* About section — matches app card style */}
      <section
        id='about'
        className='relative mx-auto mt-20 max-w-screen-lg px-4 pb-20'
      >
        <div className='absolute inset-x-0 top-0 -z-[1] h-40 bg-[radial-gradient(50%_90%_at_50%_0%,rgba(52,143,255,0.08)_0%,rgba(52,143,255,0)_100%)]' />
        <div className='flex justify-center gap-3 mb-8'>
          <h2 className='title-gradient text-4xl font-semibold sm:text-5xl'>About</h2>
          <h2
            className='bg-cover bg-clip-text bg-center bg-no-repeat text-4xl font-semibold text-transparent sm:text-5xl'
            style={{
              backgroundImage:
                'url(https://framerusercontent.com/images/U6UbhIrFD2OnmiS03kViwM0Qb8.svg)',
            }}
          >
            Us
          </h2>
        </div>
        <div className='rounded-2xl border border-[#2a2f58] bg-[#0a0f2f66] p-6 text-center text-[17px] leading-9 text-[#d6dbff] backdrop-blur-sm md:p-9'>
          Entrepreneurship Cell NIT Agartala is a voluntary organization dedicated to encouraging a
          thriving start-up culture and building an entrepreneurial environment. We take great pride
          in organizing a series of dynamic events that provide unparalleled opportunities for skill
          development and networking. At E-Cell, we believe that the path to success lies in
          continuous learning. E-Cell NITA is privileged to boast a robust network of accomplished
          alumni and industry experts, ever-eager to nurture your ideas and propel your
          entrepreneurial voyage into the boundless realms of possibility.
        </div>
      </section>

      {/* Contact section */}
      <section
        id='contact'
        className='mx-auto max-w-screen-lg px-4 pb-24'
      >
        <div className='flex justify-center gap-3 mb-8'>
          <h2 className='title-gradient text-4xl font-semibold sm:text-5xl'>Contact</h2>
          <h2
            className='bg-cover bg-clip-text bg-center bg-no-repeat text-4xl font-semibold text-transparent sm:text-5xl'
            style={{
              backgroundImage:
                'url(https://framerusercontent.com/images/bTF3xblyn2uyR2rZCo89tUf9mVE.svg)',
            }}
          >
            Us
          </h2>
        </div>
        <div className='rounded-2xl border border-[#2a2f58] bg-[#0a0f2f66] p-6 backdrop-blur-sm md:p-9'>
          <div className='flex flex-col gap-3 text-center text-[17px] leading-9 text-[#d6dbff]'>
            <p>
              E-mail:{' '}
              <a
                href='mailto:ecellnita@gmail.com'
                className='text-primary underline-offset-4 hover:underline'
              >
                ecellnita@gmail.com
              </a>
            </p>
            <p>Phone: +91 6234 567890</p>
            <p>Address: National Institute of Technology Agartala, Jirania, West Tripura — 799046</p>
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
}

export default page;
