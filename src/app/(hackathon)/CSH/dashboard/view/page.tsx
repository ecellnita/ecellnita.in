'use client';

import React, { useEffect, useState } from 'react';

import { type TeamWithPasswordHash, getIdea, getTeam } from '~/lib/actions';

import { toast } from 'sonner';

import TeamView from '~/components/CSH/dashboad/TeamView';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

function Page() {
  const [teamDetails, setTeamDetails] = useState<TeamWithPasswordHash>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getTeamDetails = async () => {
    try {
      // console.log(values);
      const team_id = localStorage.getItem('csh_team_id');
      if (!team_id) {
        return;
      }
      const res = await getTeam(team_id);

      setTeamDetails(res);
    } catch (error) {
      toast.error(String(error));
    }
  };

  useEffect(() => {
    void getTeamDetails();
  }, []);

  if (teamDetails)
    return (
      <>
        <div className='flex flex-col items-center md:items-end justify-end'>
          <div className='md:hidden flex items-center justify-end p-4 w-full'>
            <Menu size={35} className='z-40' onClick={()=>{
              if(isMenuOpen){
                setIsMenuOpen(false);
              }else{
                setIsMenuOpen(true);
              }
            }}/>
            
            {
              isMenuOpen &&
              <div className='flex flex-col justify-center items-center absolute top-0 right-0 w-full h-[40svh] bg-gray-900/85 z-50'>
                <div className='p-4 w-full flex justify-end items-center'>
                  <X size={35} onClick={()=>{
                    if(isMenuOpen){
                      setIsMenuOpen(false);
                    }else{
                      setIsMenuOpen(true);
                    }
                  }}/>
                </div>
                <div className='flex flex-col justify-evenly items-center py-12 h-full'>
                  <Link href='/CSH/dashboard/view' className='text-white'>View Team</Link>
                  <Link href='/CSH/dashboard/edit' className='text-white'>Edit Team</Link>
                  <Link href='/CSH/login' className='text-white'>Log out</Link>
                </div>
              </div>
            }
          </div>
          <TeamView {...teamDetails} />
        </div>
      </>
    );
}

export default Page;
