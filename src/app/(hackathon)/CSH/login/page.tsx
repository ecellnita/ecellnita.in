import React from 'react';

import LoginForm from '~/components/CSH/form/loginForm';

function page() {
  return (
    <>
      <div className='mt-36 flex w-full flex-col items-center justify-center'>
        <h1 className='mb-16 text-balance text-[clamp(1.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white/95'>
          Login to dashboard
        </h1>
        <p className='text-white font-semibold text-center'>You will receive your Team ID and password on your registered email</p>
        <div className='mx-auto my-8 w-[40%] px-4 '>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default page;
