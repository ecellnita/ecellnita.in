import React from 'react';

const AboutUs = () => {
  return (
    <section
      id='aboutus'
      className='relative flex h-fit flex-col items-center justify-center px-5 py-5 md:py-40'
      style={{
        backgroundColor: '#040c08',
      }}
    >
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

      <div className='mt-10 w-[95%] text-justify text-[17px] text-gray-200 md:w-[75%]'>
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
