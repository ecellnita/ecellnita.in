import Image from 'next/image'
import React from 'react'

function CSHAbout() {
  return (
    <div className='flex justify-center items-center my-12 h-[250svh]'>
        <div className='w-[85%] flex flex-col justify-center items-center'>
            <h1 className='mb-16 text-balance text-[clamp(1.8rem,6vw,5.2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white/95'>
                How Does it Work?
            </h1>
            
            <div className='flex flex-col justify-between items-center'>
                <div className='flex md:flex-row flex-col justify-between items-center'>
                    <div className='md:w-[50%] w-[90%]'>
                        <h2 className='text-4xl text-white font-semibold my-4'>Understand the Problem</h2>
                        <p className='text-lg'>
                            Understand your assigned problem statement, identifying key cybersecurity challenges and goals. Break it down to plan your approach.
                        </p>
                    </div>
                    <div>
                        <Image src='/photos/ieif/csh-about-step-1.png' alt='step-1' width={500} height={500} />
                    </div>
                </div>

                <div className='flex md:flex-row flex-col-reverse justify-between items-center'>
                    <div>
                        <Image src='/photos/ieif/csh-about-step-2.png' alt='step-1' width={450} height={450} />
                    </div>
                    <div className='md:w-[50%] w-[90%]'>
                        <h2 className='text-4xl text-white font-semibold my-4'>Team Up and Plan</h2>
                        <p className='text-lg'>
                            Form a team(or you can participate individually too) with diverse skills. Brainstorm, outline strategies, and choose tools to address the problem effectively.
                        </p>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col justify-between items-center'>
                    <div className='md:w-[50%] w-[90%]'>
                        <h2 className='text-4xl text-white font-semibold my-4'>Build and Create the Presentation</h2>
                        <p className='text-lg'>
                            Develop your solution while preparing a presentation that highlights your approach, features, and the security impact of your solution.
                        </p>
                    </div>
                    <div>
                        <Image src='/photos/ieif/csh-about-step-3.png' alt='step-1' width={500} height={500} />
                    </div>
                </div>


                <div className='flex md:flex-row flex-col-reverse justify-between items-center'>
                    <div>
                        <Image src='/photos/ieif/csh-about-step-4.png' alt='step-1' width={500} height={500} />
                    </div>
                    <div className='md:w-[50%] w-[90%]'>
                        <h2 className='text-4xl text-white font-semibold my-4'>Submit and Showcase</h2>
                        <p className='text-lg'>
                            Submit your presentation by the deadline. At the finale, demonstrate your solution live to impress the judges and compete for prizes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CSHAbout