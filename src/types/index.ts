export const Teams = [
  {
    name: 'All',
    key: 'all',
  },
  {
    name: 'Tech Team',
    key: 'tech',
  },
  {
    name: 'Design Team',
    key: 'design',
  },
  {
    name: 'Content Team',
    key: 'content',
  },
  {
    name: 'Events Team',
    key: 'events',
  },
  {
    name: 'Finance Team',
    key: 'finance',
  },
  {
    name: 'Social Media and PR Team',
    key: 'social-media',
  },
  {
    name: 'Startup and Development',
    key: 'startup',
  },
  {
    name: 'Alumni Affairs',
    key: 'alumni',
  },
] as const;

export type TeamType = (typeof Teams)[number]['key'];

export interface Social {
  name: 'twitter' | 'instagram' | 'linkedin' | 'email';
  link: string;
}

export interface ExecutiveProps {
  name: string;
  image: string;
  position: string;
  socials: Social;
}

export interface MemberProps {
  name: string;
  team: TeamType;
  position: string;
  image: string;
  socials: Social;
}
