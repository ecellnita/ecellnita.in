'use client';

import React, { useEffect, useState } from 'react';

import { type TeamWithPasswordHash, getIdea, getTeam } from '~/lib/actions';

import { toast } from 'sonner';

import TeamView from '~/components/CSH/dashboad/TeamView';

function Page() {
  const [teamDetails, setTeamDetails] = useState<TeamWithPasswordHash>();
  const [ideaDetails, setIdeaDetails] = useState(null);

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

  const getIdeaDetails = async () => {
    try {
      // console.log(values);
      const team_id = localStorage.getItem('csh_team_id');
      if (!team_id) {
        return;
      }
      const res = await getIdea(team_id);

      console.log("idea: ", res);
      setIdeaDetails(res);
    } catch (error) {
      toast.error(String(error));
    }
  };

  useEffect(() => {
    void getTeamDetails();
    void getIdeaDetails();
  }, []);

  if (teamDetails)
    return (
      <>
        <div className='flex items-center justify-end'>
          <TeamView {...teamDetails} ideaDetails={ideaDetails} />
        </div>
      </>
    );
}

export default Page;
