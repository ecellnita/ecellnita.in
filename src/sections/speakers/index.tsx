'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const allSpeakers = [
  {
    id: 1,
    name: 'Ishan Sharma',
    role: 'Co-founder Markitup'
  },
  {
    id: 2,
    name: 'Anubhab Dubey',
    role: 'Co-founder Chai Sutta Bar'
  },
  {
    id: 3,
    name: 'Aman Dhattarwal',
    role: 'Founder Apna College'
  },
  {
    id: 4,
    name: 'Yash Garg',
    role: 'Founder College Setu'
  },
  {
    id: 5,
    name: 'Shradha Khapra',
    role: 'Co-founder Apna College'
  },
]

const Speakers = () => {
  const [hoveredElement, setHoveredElement] = useState({
    name: '',
  });
  return (
    <section
      className='z-[10] flex h-full min-h-screen flex-col items-center justify-center gap-12 py-12'
      id='speakers'
    >
      <div className='flex justify-center items-center flex-col w-full'>
        <h2 className='title-gradient z-[2] text-[2rem] font-semibold leading-[1.3] sm:text-5xl md:text-6xl my-5'>
          Iconic{' '}
          <span
            className='bg-cover bg-clip-text bg-center bg-no-repeat text-transparent'
            style={{
              backgroundImage:
                'url(https://framerusercontent.com/images/bTF3xblyn2uyR2rZCo89tUf9mVE.svg)',
            }}
          >
            Speakers
          </span>
        </h2>
        <p className='mx-auto max-w-sm px-2 text-center text-xs sm:text-base md:text-lg lg:max-w-4xl'>
          Explore the impactful speakers who have imparted their wisdom and insights at E-Cell events, fueling the entrepreneurial spirit.
        </p>
        <div className='flex justify-between items-center w-[80%] mt-10'>
            {
              allSpeakers.map((speaker, i)=>{
                return <div key={i} className='w-[17%] h-[35svh] rounded-md flex flex-col justify-center items-center p-4 bg-[#34245c] cursor-pointer transition-all' 
                        style={{
                          backgroundImage: hoveredElement.name === speaker.name ? `url(/photos/speakers/${speaker.id}.jpg)` : '',
                          backgroundSize: 'cover',
                          opacity: hoveredElement.name === speaker.name ? 0.8 : 1,
                        }} 
                        onMouseEnter={()=>setHoveredElement({ name: speaker.name })} 
                        onMouseLeave={()=>setHoveredElement({ name: '' })}
                      >
                        {
                          hoveredElement.name !== speaker.name &&  <>
                                          <Image
                                            src={`/photos/speakers/${speaker.id}.jpg`}
                                            width={120}
                                            height={120}
                                            alt={speaker.name}
                                            className='rounded-full'
                                          />
                                          <div className='mt-4 flex flex-col justify-center items-center'>
                                            <h5 className='text-lg font-bold'>{speaker.name}</h5>
                                            <p className='text-sm'>{speaker.role}</p>
                                          </div>
                                        </>
                        }
          
                        {
                          hoveredElement.name === speaker.name &&  <>
                                          <div className='mt-4 flex flex-col justify-center items-center'>
                                            <h5 className='text-lg font-bold text-white'>{speaker.name}</h5>
                                            <p className='text-sm text-white'>{speaker.role}</p>
                                          </div>
                                        </>
                        }
                      </div>
              })
            }
        </div>
      </div>
    </section>
  );
};

export default Speakers;
