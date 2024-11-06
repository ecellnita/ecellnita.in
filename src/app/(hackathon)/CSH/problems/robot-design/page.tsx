import React from 'react';

import Footer from '~/components/CSH/footer';

function page() {
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
              <div className='mb-7 mt-14'>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Problem statement
                  </h3>
                  <p className='my-2 text-lg'>
                    What features should a robotic assistant possess to improve
                    convenience and safety in settings like schools, hospitals,
                    and malls?
                  </p>
                </div>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Expected Outcome
                  </h3>
                  <p className='my-2 text-lg'>
                    Participants are expected to design a robot concept that
                    incorporates features such as voice recognition, navigation,
                    and interactive assistance. Solutions should demonstrate how
                    these functionalities make the robot effective at guiding
                    and assisting individuals in everyday environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default page;
