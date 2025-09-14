import React from 'react';

import BlogList from '~/components/Blog/BlogList';
import ScrollToTopButton from '~/components/Blog/ScrollToTopButton';
import Footer from '~/components/CSH/footer';

function page() {
  return (
    <div className='mt-36'>
      <div>
        <div className='mt-2 flex flex-col items-center justify-center gap-3 pt-4 text-center md:flex-row'>
          <h1 className='font-playfair text-4xl font-bold text-white sm:text-5xl md:text-6xl'>
            The
          </h1>
          <h1 className='font-playfair text-4xl font-bold text-pink-500 sm:text-5xl md:text-6xl'>
            Entrepreneurial
          </h1>
          <h1 className='font-playfair text-4xl font-bold text-white sm:text-5xl md:text-6xl'>
            Horizon
          </h1>
        </div>
        <h2 className='mx-auto max-w-screen-lg p-4 text-center font-serif text-3xl leading-relaxed text-white'>
          "Inspiring Ideas, Stories, and Strategies for Tomorrow's Leaders."
        </h2>
        <p className=' mx-auto max-w-screen-lg p-4 text-center font-serif text-lg leading-relaxed text-white'>
          The Entrepreneurial Horizon is your gateway to exploring the limitless
          possibilities of innovation and enterprise. With a focus on inspiring
          stories, insightful analyses, and actionable advice, this blog
          captures the essence of entrepreneurship in a dynamic world. Whether
          you're a budding visionary or a seasoned leader, *The Entrepreneurial
          Horizon* offers a platform to navigate challenges, celebrate
          successes, and envision the future of business with clarity and
          purpose.
        </p>
      </div>
      <BlogList />
      <div id='about' className='mx-auto max-w-screen-lg p-4 text-white'>
        <div className='flex justify-center gap-2'>
          <h1 className='mb-6 text-center text-4xl font-bold sm:text-5xl md:text-6xl'>
            About
          </h1>
          <h1 className='mb-6 text-center text-4xl font-bold text-pink-500 sm:text-5xl md:text-6xl'>
            Us
          </h1>
        </div>
        <p className='mx-auto max-w-screen-lg p-4 text-center font-serif text-lg leading-relaxed'>
          Entrepreneurship Cell NIT Agartala is a voluntary organization
          dedicated to encouraging a thriving start-up culture and building an
          entrepreneurial environment. We take great pride in organizing a
          series of dynamic events that provide unparalleled opportunities for
          skill development and networking. Our past events like the Startup
          Expo, IPL Auction, Content Creation Conclave and others, offer the
          perfect platform for networking, learning, and honing essential
          skills, ensuring that every participant finds something uniquely
          valuable. At E-Cell, we believe that the path to success lies in
          continuous learning. To that end, we regularly host distinguished
          speakers from diverse domains who generously impart their insights and
          experiences in captivating keynote sessions. These sessions are not
          just educational, they are powerful beacons of inspiration that ignite
          the path to success for our students. Furthermore, E-Cell NITA is
          privileged to boast a robust network of accomplished alumni and
          industry experts, ever-eager to nurture your ideas and propel your
          entrepreneurial voyage into the boundless realms of possibility.
        </p>
      </div>

      <div id='contact' className='mx-auto max-w-screen-lg p-4 text-white'>
        <div className='flex justify-center gap-2'>
          <h1 className='mb-6 text-center text-4xl font-bold sm:text-5xl md:text-6xl'>
            Contact
          </h1>
          <h1 className='mb-6 text-center text-4xl font-bold text-pink-500 sm:text-5xl md:text-6xl'>
            Us
          </h1>
        </div>
        <p className='text-center font-serif text-lg leading-relaxed'>
          E-mail: <a href='https://www.gmail.com'>ecellnita@gmail.com</a>
        </p>
        <p className='text-center font-serif text-lg leading-relaxed'>
          Phone: +91 6234 567890
        </p>
        <p className='text-center font-serif text-lg leading-relaxed'>
          Address: National Institute of Technology Agartala Jirania , West
          Tripura Pin - 799046
        </p>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default page;
