import React from 'react'
import Footer from '~/components/CSH/footer'

function page() {
  return (
    <>
        <div className='relative w-full bg-cover bg-center overflow-hidden bg-[#0D0628]'>
            <div className="relative flex justify-center items-center flex-col py-16 bg-cover bg-center overflow-hidden bg-[#0D0628] bg-[url('/photos/ieif/ieif-bg.png')]">
                <div className='mt-14 w-[85%] flex flex-col justify-center items-center'>
                  <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-6xl font-bold text-white'>Cyber Security Hackathon</h1>

                    {/* PS-1 */}
                    <div className='mt-14 mb-7'>
                      <h2 className='text-white font-semibold text-4xl'>PS-1: Decrypting the Caesar Cipher</h2>
                      <div className='flex flex-col justify-between items-start my-6 w-[90%]'>
                        <h3 className='font-bold text-2xl text-white'>Problem statement</h3>
                        <p className='text-lg my-2'>Can you decrypt intercepted messages encoded with the Caesar Cipher to uncover clues about potential attackers’ strategies and timelines?</p>
                      </div>
                      <div className='flex flex-col justify-between items-start my-6 w-[90%]'>
                        <h3 className='font-bold text-2xl text-white'>Expected Outcome</h3>
                        <p className='text-lg my-2'>Participants are expected to successfully reverse-engineer the Caesar Cipher, providing decrypted messages along with any intelligence they reveal about the attackers’ intentions. This will demonstrate their understanding of classic encryption methods.</p>
                      </div>
                    </div>

                    {/* PS-2 */}
                    <div className='my-7'>
                      <h2 className='text-white font-semibold text-4xl'>PS-2: Examination of a Keystroke Logger</h2>
                      <div className='flex flex-col justify-between items-start my-6 w-[90%]'>
                        <h3 className='font-bold text-2xl text-white'>Problem statement</h3>
                        <p className='text-lg my-2'>How can you detect and analyze the functionality of a keystroke logger and develop mechanisms to prevent it from stealing sensitive information?</p>
                      </div>
                      <div className='flex flex-col justify-between items-start my-6 w-[90%]'>
                        <h3 className='font-bold text-2xl text-white'>Expected Outcome</h3>
                        <p className='text-lg my-2'>Participants should examine the structure and operation of a simulated keystroke logger, identifying how it infiltrates systems and records keystrokes. They are expected to develop and present detection and mitigation strategies, showcasing their ability to counteract malware.</p>
                      </div>
                    </div>

                    {/* PS-3 */}
                    <div className='my-7'>
                      <h2 className='text-white font-semibold text-4xl'>PS-3: Network Packet Sniffing and Protection</h2>
                      <div className='flex flex-col justify-between items-start my-6 w-[90%]'>
                        <h3 className='font-bold text-2xl text-white'>Problem statement</h3>
                        <p className='text-lg my-2'>How can you identify vulnerabilities in network communications and implement protective measures to prevent unauthorized access and data interception?</p>
                      </div>
                      <div className='flex flex-col justify-between items-start my-6 w-[90%]'>
                        <h3 className='font-bold text-2xl text-white'>Expected Outcome</h3>
                        <p className='text-lg my-2'>Participants are expected to perform packet sniffing, analyze unencrypted network data traffic, and apply security protocols such as encryption and firewall rules. This should demonstrate their capability to safeguard network integrity and protect sensitive information.</p>
                      </div>
                    </div>

                    {/* PS-4 */}
                    <div className='my-7'>
                      <h2 className='text-white font-semibold text-4xl'>PS-4: Developing Defenses Against SQL Injection</h2>
                      <div className='flex flex-col justify-between items-start my-6 w-[90%]'>
                        <h3 className='font-bold text-2xl text-white'>Problem statement</h3>
                        <p className='text-lg my-2'>What methods can you implement to secure a web application’s database against SQL injection attacks?</p>
                      </div>
                      <div className='flex flex-col justify-between items-start my-6 w-[90%]'>
                        <h3 className='font-bold text-2xl text-white'>Expected Outcome</h3>
                        <p className='text-lg my-2'>Participants are expected to investigate SQL injection vulnerabilities, simulate attack scenarios, and design robust defenses. The outcome should include strategies that maintain database confidentiality and integrity, essential for secure data management.</p>
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