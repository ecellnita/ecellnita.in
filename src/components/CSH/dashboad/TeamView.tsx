import React from 'react';

import { Users } from 'lucide-react';

function TeamView({ teamDetails }) {
  return (
    <div className='mt-20 flex w-[85%] flex-col p-8'>
      <div className='flex items-center justify-between rounded-xl bg-[#0c0c29] p-8'>
        <div>
          <h1 className='text-4xl font-bold text-white'>
            Team: {teamDetails && teamDetails.teamName}
          </h1>
          <p className='mt-4'>
            Team Leader: {teamDetails && teamDetails.leader.Name}
          </p>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <span className='flex items-center justify-between'>
            <span className='mr-4 text-xl'>
              {teamDetails && teamDetails.members.length+1}
            </span>
            <Users />
          </span>
          <span className='mt-4'>
            <span className='rounded-2xl bg-red-500 px-3 py-1 text-sm text-white'>
              not submitted
            </span>
          </span>
        </div>
      </div>

      <div className='my-10 flex h-[40svh] flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-600 bg-[#0c0c29] p-8'>
        <p className='my-4 font-semibold text-gray-400'>
          Submit your video and presentation here
        </p>
        <button
          className='w-[15%] rounded-xl bg-gray-300 px-4 py-2 font-semibold text-gray-600'
          disabled
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default TeamView;
