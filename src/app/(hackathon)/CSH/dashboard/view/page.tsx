'use client';

import React, { useEffect, useState } from 'react';

import { toast } from 'sonner';

import TeamView from '~/components/CSH/dashboad/TeamView';

function Page() {
  const [teamDetails, setTeamDetails] = useState(null);

  const getTeamDetails = async () => {
    try {
      // console.log(values);
      const team_id = localStorage.getItem('csh_team_id');
      const res = await fetch(`${process.env.API_URL}/${team_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const response = await res.json();
      console.log('team details: ', response);
      if (res.status === 200) {
        setTeamDetails(response);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  useEffect(() => {
    getTeamDetails();
  }, []);

  return (
    <>
      <div className='flex items-center justify-end'>
        <TeamView teamDetails={teamDetails} />
      </div>
    </>
  );
}

export default Page;
