import React from 'react';

import RegisterForm from '~/components/CSH/form/registrationForm';

function page() {
  return (
    <>
      <div className='mt-28 flex w-full flex-col items-center justify-center'>
        <h1 className='mb-16 text-balance text-[clamp(1.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white/95'>
          Register Your Team
        </h1>
        <div className='mx-auto my-8 w-[40%] px-4 '>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}

export default page;
