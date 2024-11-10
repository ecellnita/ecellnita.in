'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

import Footer from '~/components/CSH/footer';

function Page() {
  const router = useRouter();
  return (
    <>
      <div className='relative w-full overflow-hidden bg-[#0D0628] bg-cover bg-center'>
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0D0628] bg-[url('/photos/ieif/ieif-bg.png')] bg-cover bg-center py-16">
          <div className='mt-14 flex w-[85%] flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold text-white'>
                “May I Help You” Robot Design
              </h1>

              {/* PS-1 */}
              <div className='mb-7 mt-14 rounded-3xl border border-white p-4'>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Problem statement
                  </h3>
                  <p className='my-2 text-lg'>
                    Design a {"May I Help You"} robotic assistant to enhance convenience and safety in public settings such as schools, hospitals, and malls. Consider essential features that would make the robot capable of guiding, assisting, and interacting with people in these environments.
                  </p>
                </div>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Expected Outcome
                  </h3>
                  <div className='my-5 flex flex-col gap-1'>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Construct a conceptual robot design that prioritizes user convenience and safety.
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Formulate detailed descriptions of key features, including:
                    </div>
                    <div className='ml-2 my-2'>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                        Voice Recognition: Ability to understand and respond to verbal commands for ease of use.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                        Navigation System: Efficient movement and obstacle avoidance in crowded spaces.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                        Interactive Assistance: Engaging and helpful interactions with users, including responses to questions or guidance to specific locations.
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Draft clear explanation of how each feature improves the robot’s effectiveness in real-life scenarios.
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Use visual aids or mock-ups to illustrate the robot’s design and functionalities (optional).
                    </div>
                  </div>
                </div>
              </div>
              <button
                className='rounded-lg bg-white px-4 py-2 font-semibold text-gray-700 z-10'
                onClick={() => router.push('/CSH/login')}
              >
                Login now
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Page;
