import { Users } from 'lucide-react'
import React from 'react'

function TeamView({ teamDetails }) {
  return (
    <div className='w-[85%] p-8 flex flex-col mt-20'>
        <div className='flex justify-between items-center bg-[#0c0c29] p-8 rounded-xl'>
            <div>
                <h1 className='text-4xl text-white font-bold'>Team: {teamDetails && teamDetails.teamName}</h1>
                <p className='mt-4'>Team Leader: {teamDetails && teamDetails.leader.Name}</p>
            </div>
            <div className='flex flex-col justify-between items-center'>
                <span className='flex justify-between items-center'>
                    <span className='text-xl mr-4'>{teamDetails && teamDetails.members.length}</span>
                    <Users />
                </span>
                <span className='mt-4'>
                    <span className='rounded-2xl text-sm bg-red-500 text-white px-3 py-1'>
                        not submitted
                    </span>
                </span>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center bg-[#0c0c29] p-8 rounded-xl border-2 border-dashed border-gray-600 my-10 h-[40svh]'>
            <p className='text-gray-400 my-4 font-semibold'>Submit your video and presentation here</p>
            <button className='bg-gray-300 text-gray-600 px-4 py-2 rounded-xl font-semibold w-[15%]' disabled>Submit</button>
        </div>
    </div>
  )
}

export default TeamView