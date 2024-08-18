import { create } from 'zustand';
import type { MemberProps, TeamType } from '~/types';

import { members } from '../data';

interface State {
  activeTeam: TeamType;
  members: MemberProps[];
}

interface Actions {
  setActiveTeam: (team: TeamType) => void;
  setMembers: (members: MemberProps[]) => void;
}

export const useTeamStore = create<State & Actions>((set, get) => ({
  activeTeam: 'all',
  members,
  setActiveTeam: (team) => {
    const newMembers =
      team === 'all' ? members : members.filter((m) => m.team === team);
    set({ activeTeam: team, members: newMembers });
  },
  setMembers: (members) => set({ members }),
}));
