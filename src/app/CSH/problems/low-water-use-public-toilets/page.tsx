import React from 'react'
import Footer from '~/components/CSH/footer'

function page() {
  return (
    <>
        <div className='relative w-full bg-cover bg-center overflow-hidden bg-[#0D0628]'>
            <div className="relative flex justify-center items-center flex-col py-16 bg-cover bg-center overflow-hidden bg-[#0D0628] bg-[url('/photos/ieif/ieif-bg.png')]">
                <div className='mt-14 w-[85%] flex flex-col justify-center items-center'>
                  <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-6xl font-bold text-white'>Low-Water Use Public Toilets with Digital Monitoring and Control Systems</h1>

                    {/* PS-1 */}
                    <div className='mt-14 mb-7'>
                      <div className='flex flex-col justify-between items-start my-6 w-[90%]'>
                        <h3 className='font-bold text-2xl text-white'>Problem statement</h3>
                        <p className='text-lg my-2'>How can you design a public restroom system that minimizes water usage while ensuring cleanliness and effective maintenance?</p>
                      </div>
                      <div className='flex flex-col justify-between items-start my-6 w-[90%]'>
                        <h3 className='font-bold text-2xl text-white'>Expected Outcome</h3>
                        <p className='text-lg my-2'>Participants should develop water-efficient designs and digital monitoring systems that facilitate timely maintenance in high-traffic areas. Solutions should illustrate how technology can optimize water usage and improve hygiene, accessibility, and user satisfaction.</p>
                      </div>
                    </div>

                  </div>
                </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default page