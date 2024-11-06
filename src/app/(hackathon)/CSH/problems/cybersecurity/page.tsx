import React from 'react';

import Footer from '~/components/CSH/footer';

function page() {
  return (
    <>
      <div className='relative w-full overflow-hidden bg-[#0D0628] bg-cover bg-center'>
        <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0D0628] bg-[url('/photos/ieif/ieif-bg.png')] bg-cover bg-center py-16">
          <div className='mt-14 flex w-[85%] flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold text-white'>
                Cyber Security Hackathon
              </h1>

              {/* PS-1 */}
              <div className='mb-7 mt-14'>
                <h2 className='text-4xl font-semibold text-white'>
                  PS-1: Decrypting the Caesar Cipher
                </h2>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Problem statement
                  </h3>
                  <p className='my-2 text-lg'>
                    Can you decrypt intercepted messages encoded with the Caesar
                    Cipher to uncover clues about potential attackers’
                    strategies and timelines?
                  </p>
                </div>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Expected Outcome
                  </h3>
                  <p className='my-2 text-lg'>
                    Participants are expected to successfully reverse-engineer
                    the Caesar Cipher, providing decrypted messages along with
                    any intelligence they reveal about the attackers’
                    intentions. This will demonstrate their understanding of
                    classic encryption methods.
                  </p>
                </div>
              </div>

              {/* PS-2 */}
              <div className='my-7'>
                <h2 className='text-4xl font-semibold text-white'>
                  PS-2: Examination of a Keystroke Logger
                </h2>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Problem statement
                  </h3>
                  <p className='my-2 text-lg'>
                    How can you detect and analyze the functionality of a
                    keystroke logger and develop mechanisms to prevent it from
                    stealing sensitive information?
                  </p>
                </div>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Expected Outcome
                  </h3>
                  <p className='my-2 text-lg'>
                    Participants should examine the structure and operation of a
                    simulated keystroke logger, identifying how it infiltrates
                    systems and records keystrokes. They are expected to develop
                    and present detection and mitigation strategies, showcasing
                    their ability to counteract malware.
                  </p>
                </div>
              </div>

              {/* PS-3 */}
              <div className='my-7'>
                <h2 className='text-4xl font-semibold text-white'>
                  PS-3: Network Packet Sniffing and Protection
                </h2>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Problem statement
                  </h3>
                  <p className='my-2 text-lg'>
                    How can you identify vulnerabilities in network
                    communications and implement protective measures to prevent
                    unauthorized access and data interception?
                  </p>
                </div>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Expected Outcome
                  </h3>
                  <p className='my-2 text-lg'>
                    Participants are expected to perform packet sniffing,
                    analyze unencrypted network data traffic, and apply security
                    protocols such as encryption and firewall rules. This should
                    demonstrate their capability to safeguard network integrity
                    and protect sensitive information.
                  </p>
                </div>
              </div>

              {/* PS-4 */}
              <div className='my-7'>
                <h2 className='text-4xl font-semibold text-white'>
                  PS-4: Developing Defenses Against SQL Injection
                </h2>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Problem statement
                  </h3>
                  <p className='my-2 text-lg'>
                    What methods can you implement to secure a web application’s
                    database against SQL injection attacks?
                  </p>
                </div>
                <div className='my-6 flex w-[90%] flex-col items-start justify-between'>
                  <h3 className='text-2xl font-bold text-white'>
                    Expected Outcome
                  </h3>
                  <p className='my-2 text-lg'>
                    Participants are expected to investigate SQL injection
                    vulnerabilities, simulate attack scenarios, and design
                    robust defenses. The outcome should include strategies that
                    maintain database confidentiality and integrity, essential
                    for secure data management.
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
