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
                Innovation for Clean Homes and Cities
              </h1>

              {/* PS-1 */}
              <div className='mb-7 mt-14 rounded-3xl border border-white p-4'>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Problem statement
                  </h3>
                  <p className='my-2 text-lg'>
                    Develop strategies and solutions that promote cleaner,
                    healthier, and eco-friendlier environments in urban and
                    residential areas. Focus on waste reduction, pollution
                    control, and sustainable urban planning to enhance the
                    quality of life and environmental health.
                  </p>
                </div>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Expected Outcome
                  </h3>
                  <div className='my-5 flex flex-col gap-1'>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Prepare innovative solutions for waste reduction such as
                      Recycling programs or zero-waste systems, Composting
                      initiatives for organic waste.
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Structure pollution control strategies, addressing
                      reduction of air and noise pollution in urban areas.
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Produce sustainable urban planning models that
                      incorporate: Green spaces and urban forestry to enhance
                      biodiversity.
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Draft a clear plan illustrating how these strategies
                      create cleaner, greener, and more sustainable communities.
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Use Visual aids or models (optional) to demonstrate how
                      these solutions can be implemented and their impact on
                      communities.
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
