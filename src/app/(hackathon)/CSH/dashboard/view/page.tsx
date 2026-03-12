'use client';

import React, { useEffect, useState } from 'react';

import { type TeamWithPasswordHash, getTeam } from '~/lib/actions';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { toast } from 'sonner';

import TeamView from '~/components/CSH/dashboad/TeamView';

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
        <div className='flex flex-col items-center justify-end md:items-end'>
          <div className='flex w-full items-center justify-end p-4 md:hidden'>
            <Menu
              size={35}
              className='z-40'
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />

            {isMenuOpen && (
              <div className='absolute right-0 top-0 z-50 flex h-[40svh] w-full flex-col items-center justify-center bg-gray-900/85'>
                <div className='flex w-full items-center justify-end p-4'>
                  <X size={35} onClick={() => setIsMenuOpen((prev) => !prev)} />
                </div>
                <div className='flex h-full flex-col items-center justify-evenly py-12'>
                  <Link href='/CSH/dashboard/view' className='text-white'>
                    View Team
                  </Link>
                  <Link href='/CSH/dashboard/edit' className='text-white'>
                    Edit Team
                  </Link>
                  <Link href='/CSH/login' className='text-white'>
                    Log out
                  </Link>
                </div>
              </div>
            )}
          </div>
          <TeamView {...teamDetails} />
        </div>
      </>
    );
}

export default Page;
