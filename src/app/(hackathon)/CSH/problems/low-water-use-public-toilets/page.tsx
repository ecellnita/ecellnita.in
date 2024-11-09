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
                Low-Water Use Public Toilets with Digital Monitoring and Control Systems
              </h1>

              {/* PS-1 */}
              <div className='mb-7 mt-14 rounded-3xl border border-white p-4'>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Problem statement
                  </h3>
                  <p className='my-2 text-lg'>
                    Design a public restroom system that minimizes water consumption while ensuring cleanliness, hygiene, and efficient maintenance in high-traffic areas. Incorporate digital monitoring and control systems to enhance maintenance and user experience.
                  </p>
                </div>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Expected Outcome
                  </h3>
                  <div className='my-5 flex flex-col gap-1'>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Construct a water-efficient restroom design with features that reduce water usage without compromising cleanliness.
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Integrate digital monitoring systems that:
                    </div>
                    <div className='ml-2 my-2'>
                        <div className='flex flex-row items-center gap-2'>
                          <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                          Track water consumption.
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                          <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                          Monitor usage patterns for predictive maintenance.
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                          <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                          Notify maintenance teams of required cleaning or repairs in real time.
                        </div>
                      </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Prepare solutions for optimizing hygiene and user satisfaction through features such as:
                    </div>
                    <div className='ml-2 my-2'>
                        <div className='flex flex-row items-center gap-2'>
                          <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                          Automated cleaning mechanisms.
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                          <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                          Contactless fixtures (faucets, soap dispensers, flush systems).
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                          <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                          Accessibility features for a wide range of users.
                        </div>
                      </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Explain how technology supports sustainability, maintenance efficiency, and overall user satisfaction.
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Use visual diagrams or mock-ups to support the proposed design (optional).
                    </div>
                  </div>
                  <p className='my-2 text-lg'>
                    Participants should propose innovative solutions focused on
                    waste reduction, pollution control, and sustainable urban
                    planning. Expected outputs include actionable ideas or
                    models that illustrate how these solutions can contribute to
                    creating greener, cleaner communities.
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
