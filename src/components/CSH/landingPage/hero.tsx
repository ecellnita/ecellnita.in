"use client"

import { useRouter } from "next/navigation"
// import Image from "next/image"
import HeroText from "./hackathontext"


export default function Hero() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-[100svh] mt-10 w-full">
      <div className="w-[80%] flex justify-between items-center">
        {/* <Image src='/photos/ieif/hero-cyber-graphics.png' alt="hero-cyber-graphics" width={450} height={450} /> */}
        <div>
          <HeroText/>
        </div>
        <div className="flex flex-col justify-between items-start w-[50%] ml-8">
          <h1 className="text-6xl font-bold text-white mb-2">Join The Cyber Security Hackathon</h1>
          <p className="mb-6 mt-4">Welcome to the Cyber Security Hackathon, hosted by E-Cell NIT Agartala with IICES and DIT! This event is a unique challenge for top minds to tackle real-world cybersecurity threats. Whether you’re a coder, ethical hacker, or tech enthusiast, join us to collaborate, innovate, and compete for rewards. Gain hands-on experience, learn from industry leaders, and make your mark in the cybersecurity arena.</p>
          <button className='bg-white text-gray-700 font-semibold px-4 py-2 rounded-lg' onClick={()=>router.push('IEIF/registration')}>Register Now</button>
        </div>
      </div>
    </div>
  )
}