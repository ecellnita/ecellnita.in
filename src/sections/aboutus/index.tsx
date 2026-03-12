import React from 'react';

const AboutUs = () => {
  return (
    <section
      id='aboutus'
      className='relative flex h-fit flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-16 md:pb-32 md:pt-28'
    >
      <div className='absolute inset-0 -z-[1] bg-[linear-gradient(180deg,#050719_0%,#060a21_44%,#090d2b_100%)]' />
      <div className='absolute inset-x-0 top-0 -z-[1] h-28 bg-[radial-gradient(50%_90%_at_50%_0%,rgba(99,68,245,0.22)_0%,rgba(99,68,245,0)_100%)]' />
      <div className='absolute bottom-0 left-1/2 -z-[1] h-56 w-[92%] -translate-x-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(52,143,255,0.12)_0%,rgba(52,143,255,0)_100%)] blur-xl' />

      <h2 className='title-gradient z-[2] my-5 text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl'>
        <span
          className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
          style={{
            backgroundImage:
              'url(https://framerusercontent.com/images/bTF3xblyn2uyR2rZCo89tUf9mVE.svg)',
          }}
        >
          About{' '}
        </span>
        Us
      </h2>

      <div className='mt-10 w-[95%] rounded-2xl border border-[#2a2f58] bg-[#0a0f2f66] p-6 text-justify text-[17px] leading-9 text-[#d6dbff] backdrop-blur-sm md:w-[75%] md:p-9'>
        Entrepreneurship Cell NIT Agartala is a voluntary organization dedicated
        to encouraging a thriving start-up culture and building an
        entrepreneurial environment. We take great pride in organizing a series
        of dynamic events that provide unparalleled opportunities for skill
        development and networking. Our past events like the Startup Expo, IPL
        Auction, Content Creation Conclave and others, offer the perfect
        platform for networking, learning, and honing essential skills, ensuring
        that every participant finds something uniquely valuable. At E-Cell, we
        believe that the path to success lies in continuous learning. To that
        end, we regularly host distinguished speakers from diverse domains who
        generously impart their insights and experiences in captivating keynote
        sessions. These sessions are not just educational, they are powerful
        beacons of inspiration that ignite the path to success for our students.
        Furthermore, E-Cell NITA is privileged to boast a robust network of
        accomplished alumni and industry experts, ever-eager to nurture your
        ideas and propel your entrepreneurial voyage into the boundless realms
        of possibility.
      </div>
    </section>
  );
};

export default AboutUs;
