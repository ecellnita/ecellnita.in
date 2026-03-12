'use client';

import React, { useEffect, useState } from 'react';

import { type TeamWithPasswordHash, getIdea } from '~/lib/actions';

import { Users } from 'lucide-react';
import { saveAs } from 'file-saver';
import { toast } from 'sonner';

function TeamView(teamDetails: TeamWithPasswordHash) {
  const [isIdeaSubmitted, setIsIdeaSubmitted] = useState<boolean>(false);

  const getIdeaDetails = async () => {
    try {
      const teamId = localStorage.getItem('csh_team_id');
      if (!teamId) {
        return;
      }

      const res = await getIdea(teamId);
      if (res.success) {
        setIsIdeaSubmitted(true);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch idea details';
      toast.error(message);
    }
  };

  useEffect(() => {
    void getIdeaDetails();
  }, []);

  return (
    <div className='z-40 flex w-full flex-col p-8 md:mt-20 md:w-[85%]'>
      <div className='flex items-center justify-between rounded-xl bg-[#0c0c29] p-8'>
        <div>
          <h1 className='text-xl font-bold text-white md:text-4xl'>
            Team: {teamDetails.teamName}
          </h1>
          <p className='mt-4'>Team Leader: {teamDetails.leader.name}</p>
        </div>
        <div className='flex flex-col items-center justify-between'>
          <span className='flex items-center justify-between'>
            <span className='mr-4 text-lg md:text-xl'>
              {teamDetails.members.length + 1}
            </span>
            <Users />
          </span>
          <span className='mt-4'>
            {!isIdeaSubmitted && (
              <span className='rounded-2xl bg-red-500 px-3 py-1 text-sm text-white'>
                not submitted
              </span>
            )}
            {isIdeaSubmitted && (
              <span className='rounded-2xl bg-green-500 px-3 py-1 text-sm text-white'>
                submitted
              </span>
            )}
          </span>
        </div>
      </div>

      <span
        className='mt-2 flex w-full cursor-pointer items-center justify-center text-lg italic text-red-600 underline'
        onClick={() =>
          saveAs('/CSH/CHS_Idea_PresentationFormat.pdf', 'CHS_Idea_PresentationFormat.pdf')
        }
      >
        Download Idea Presentation format here
      </span>

      <div
        className={`my-10 flex ${isIdeaSubmitted ? 'h-[40svh]' : 'h-[70svh]'} flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-600 bg-[#0c0c29] p-8`}
      >
        <p className='text-lg font-semibold text-white/85'>Idea submission is closed</p>
      </div>
    </div>
  );
}

export default TeamView;
