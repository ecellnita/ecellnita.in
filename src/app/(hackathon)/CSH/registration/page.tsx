import Link from 'next/link';
import React from 'react';

import RegisterForm from '~/components/CSH/form/registrationForm';

function page() {
  return (
    <>
      <div className='mt-28 flex w-full flex-col items-center justify-center'>
        <h1 className='mb-16 text-balance text-[clamp(1.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white/95'>
          {/* Register Your Team */}
          Register Is Closed
        </h1>
        <div className='mx-auto my-8 w-[40%] px-4 '>
          {/* Registration Form */}
          <RegisterForm />

          {/* Registration clodes */}
          {/* <div className='flex w-full justify-center items-center border-2 h-[20svh] border-dashed rounded-2xl border-gray-400'>
            <h2 className='font-semibold text-lg'><Link href='/CSH/login' className='underline'>Login</Link> if you have registered already</h2>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default page;
