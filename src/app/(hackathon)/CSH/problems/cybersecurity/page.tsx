import React from 'react';

import Footer from '~/components/CSH/footer';

function page() {
  return (
    <>
      <div className='relative w-full overflow-hidden bg-[#0D0628] bg-cover bg-center'>
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0D0628] bg-[url('/photos/ieif/ieif-bg.png')] bg-cover bg-center py-16">
          <div className='mt-14 flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold text-white'>
                Cyber Security Hackathon
              </h1>

              <div className='max-w-7xl pt-8 text-xl'>
                Welcome to the Cyber Security Hackathon, hosted by E-Cell NIT
                Agartala in collaboration with IICES and DIT! Set in an
                immersive environment, this hackathon will test your skills,
                creativity, and resilience as you confront real-world
                cybersecurity problems head-on. Whether you&lsquo;re a coder, an
                ethical hacker, or a tech enthusiast, join us to innovate,
                collaborate, and showcase your expertise. Gear up to learn from
                industry leaders, gain hands-on experience, and compete for
                exciting rewards. Are you ready to stand at the frontline of the
                digital world? Step up and make your mark in the cyber security.
              </div>

              <div className='flex flex-col gap-5'>
                {/* PS-1 */}
                <div className='mb-7 mt-14 rounded-3xl border border-white p-4'>
                  <h2 className='text-4xl font-semibold text-white'>
                    PS-1: Decrypting the Caesar Cipher
                  </h2>
                  <div className='my-6 flex flex-col items-start justify-between'>
                    <h3 className='text-2xl font-bold text-white'>
                      Problem statement
                    </h3>
                    <p className='my-2 text-lg'>
                      Can you decrypt intercepted messages encoded with the
                      Caesar Cipher to uncover clues about potential
                      attackers&lsquo; strategies and timelines?
                    </p>
                  </div>
                  <div className='my-6 flex flex-col items-start justify-between'>
                    <h3 className='text-2xl font-bold text-white'>
                      Expected Outcome
                    </h3>
                    <div className='my-5 flex flex-col gap-1'>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Reverse-engineer the Caesar Cipher to decrypt
                        intercepted messages.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Make an extention which decrypt messages along with
                        insights into attackers&lsquo; intentions.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Demonstrate comprehension of classic encryption and
                        decryption techniques.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Provide analysis of clues related to potential
                        attackers&lsquo; strategies and timelines.
                      </div>
                    </div>
                  </div>
                </div>

                {/* PS-2 */}
                <div className='my-7 rounded-3xl border border-white p-4'>
                  <h2 className='text-4xl font-semibold text-white'>
                    PS-2: Examination of a Keystroke Logger
                  </h2>
                  <div className='my-6 flex flex-col items-start justify-between'>
                    <h3 className='text-2xl font-bold text-white'>
                      Problem statement
                    </h3>
                    <p className='my-2 text-lg'>
                      How can you detect and analyze the functionality of a
                      keystroke logger and develop mechanisms to prevent it from
                      stealing sensitive information?
                    </p>
                  </div>
                  <div className='my-6 flex flex-col items-start justify-between'>
                    <h3 className='text-2xl font-bold text-white'>
                      Expected Outcome
                    </h3>
                    <div className='my-5 flex flex-col gap-1'>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Prepare a method which analyze the structure and
                        operation of a simulated keystroke logger.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Identify methods by which the logger infiltrates systems
                        and records keystrokes.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Develop to counteract malware and prevent data theft and
                        present detection and mitigation strategies for
                        keystroke logging.
                      </div>
                    </div>
                  </div>
                </div>

                {/* PS-3 */}
                <div className='my-7 rounded-3xl border border-white p-4'>
                  <h2 className='text-4xl font-semibold text-white'>
                    PS-3: Network Packet Sniffing and Protection
                  </h2>
                  <div className='my-6 flex flex-col items-start justify-between'>
                    <h3 className='text-2xl font-bold text-white'>
                      Problem statement
                    </h3>
                    <p className='my-2 text-lg'>
                      How can you identify vulnerabilities in network
                      communications and implement protective measures to
                      prevent unauthorized access and data interception?
                    </p>
                  </div>
                  <div className='my-6 flex flex-col items-start justify-between'>
                    <h3 className='text-2xl font-bold text-white'>
                      Expected Outcome
                    </h3>
                    <div className='my-5 flex flex-col gap-1'>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Perform packet sniffing and analyze unencrypted network
                        traffic.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Identify vulnerabilities in network communications and
                        data transmission.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Implement security protocols, including encryption and
                        firewall rules. •Demonstrate capability to secure
                        network integrity and protect sensitive data.
                      </div>
                    </div>
                  </div>
                </div>

                {/* PS-4 */}
                <div className='my-7 rounded-3xl border border-white p-4'>
                  <h2 className='text-4xl font-semibold text-white'>
                    PS-4: Developing Defenses Against SQL Injection
                  </h2>
                  <div className='my-6 flex flex-col items-start justify-between'>
                    <h3 className='text-2xl font-bold text-white'>
                      Problem statement
                    </h3>
                    <p className='my-2 text-lg'>
                      What methods can you implement to secure a web
                      application’s database against SQL injection attacks?
                    </p>
                  </div>
                  <div className='my-6 flex flex-col items-start justify-between'>
                    <h3 className='text-2xl font-bold text-white'>
                      Expected Outcome
                    </h3>
                    <div className='my-5 flex flex-col gap-1'>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Investigate SQL injection vulnerabilities in web
                        applications.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Simulate SQL injection attack scenarios to understand
                        potential risks.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Design and present defenses to secure the database.
                      </div>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='h-3 w-3 rounded-full bg-white' />
                        Ensure database confidentiality and integrity for secure
                        data management.
                      </div>
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
