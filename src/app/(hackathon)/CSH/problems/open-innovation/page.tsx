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
                Open Innovation Challenge
              </h1>

              {/* PS-1 */}
              <div className='mb-7 mt-14 rounded-3xl border border-white p-4'>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Problem statement
                  </h3>
                  <p className='my-2 text-lg'>
                    Identify a significant real-world problem and propose an innovative solution in a focus area such as sustainability, education, or healthcare. The solution should address the core aspects of the issue and demonstrate potential for real-world impact and scalability.
                  </p>
                </div>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Expected Outcome
                  </h3>
                  <div className='my-5 flex flex-col gap-1'>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Draft a well-defined problem statement that outlines the chosen issue and its relevance.
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Prepare an innovative solution tailored to address the problem effectively, with a focus on one of the following areas:
                    </div>
                    <div className='ml-2 my-2'>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                        Sustainability: Environmental protection, resource efficiency, or climate resilience.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                        Education: Accessibility, quality of learning, or skill development.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                        Healthcare: Access to medical care, preventive health measures, or cost reduction.
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Develop a scalable model or framework detailing:
                    </div>
                    <div className='ml-2 my-2'>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                        Key components and processes of the solution.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-2 w-2 rounded-full bg-transparent border-2 border-white' />
                        Steps for implementation and potential expansion.
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Compile an analysis of the {"solution's"} expected real-world impact, showing how it could improve lives or ecosystems.
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-white' />
                      Use visual aids, prototypes, or mock-ups to support the proposed solution (Optional).
                    </div>
                  </div>
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
