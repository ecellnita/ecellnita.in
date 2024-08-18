import type { ExecutiveProps, MemberProps } from '~/types';

import {
  Carpediem,
  Ignite,
  Illuminate,
  Initiate,
  Inizio,
} from '~/assets/events';

interface InitiativeType {
  title: string;
  date: string;
  description: string;
  image: string;
}

export const initiatives: InitiativeType[] = [
  {
    date: 'January 27, 2023',
    title: 'Initiate',
    description:
      'Initiated the spark of entrepreneurship in the freshers by introducing them to different segments of the club. The success stories of students from our institute served as an inspiration for the young minds. This event was successful in cultivating awareness towards the entrepreneurial ecosystem.',
    image: Initiate.src,
  },
  {
    title: 'ILLUMINATE',
    date: 'January 28, 2023',
    description:
      'Annual event organised by E-Cell NIT Agartala exclusively for the 1st year students. Participants were divided in teams and given a problem statement after workshops on Entrepreneurship & Business models. They had 24 hours to brainstorm the potential solution & present before the jury.',
    image: Illuminate.src,
  },
  {
    title: `IGNITE`,
    date: '22nd-26th January 2023',
    description: `A three day event where participants were graced with the opportunity to partake in enlightening speaker sessions featuring eminent figures from the entrepreneurial realm.The case solving event which themed as 'Local before global' cultivated the problem solving mindset among the attendances`,
    image: Ignite.src,
  },
  {
    title: 'Carpe diem',
    date: '28th January 2023',
    description: `Carpe diem, in a literal sense means 'Seize the day'. And it is the same feeling that we instil in our event. Carpe Diem is the flagship event of E-Cell NIT, Agartala and was the first ever E-Summit of North East India. It's motive is to outreach the concepts of entrepreneurship among the students and give them a hands-on learning experience. With immense enthusiasm and zeal we conduct these events that  encourage and motivate budding entrepreneurs to succeed in their ventures.`,
    image: Carpediem.src,
  },
  {
    title: 'Inizio',
    date: '28th January 2023',
    description: `A platform to exhibit entrepreneurial skills via the Idea Pitching Competition. The event spanned two rounds: first, participants submitted their innovative ideas, detailing their startup concepts. In the second round, shortlisted candidates presented their ideas, highlighting the potential impact, feasibility, and uniqueness.`,
    image: Inizio.src,
  },
];

export interface TeamType {
  name: string;
  members: TeamMember[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: Record<string, string>;
}

export const executives: ExecutiveProps[] = [
  {
    name: 'Saadhvi Bhukya',
    image: '1.jpeg',
    position: 'President',
    socials: {
      name: 'email',
      link: 'mailto:saadhvibhukya2323@gmail.com',
    },
  },
  {
    name: 'Ashutosh Sahu',
    image: '2.jpeg',
    position: 'General Secretory',
    socials: {
      name: 'twitter',
      link: 'https://twitter.com/seeessh',
    },
  },
  {
    name: 'G Nivitha Krishnan',
    image: '3.jpeg',
    position: 'Head Of Operations(Non-technical)',
    socials: {
      name: 'email',
      link: 'mailto:reachnancy246@gmail.com',
    },
  },
  {
    name: 'Aditya Kanu',
    image: '4.jpeg',
    position: 'Head Of Technical Operations',
    socials: {
      name: 'email',
      link: 'mailto:21uei017.adityakanu@gmail.com',
    },
  },
  {
    name: 'Hemant Shankar',
    image: '5.jpeg',
    position: 'Head of Operations and Strategies',
    socials: {
      name: 'email',
      link: 'mailto:hemantshankar9595@gmail.com',
    },
  },
  {
    name: 'Krishna Chandak',
    image: '6.png',
    position: 'General Secretary',
    socials: {
      name: 'email',
      link: 'mailto:krishnachandak.official@gmail.com',
    },
  },
  {
    name: 'Madhumita Moi',
    image: '7.jpeg',
    position: 'Head of External Affairs',
    socials: {
      name: 'email',
      link: 'mailto:madhumoi0266@gmail.com',
    },
  },
  {
    name: 'Pranjal Tank',
    image: '8.jpeg',
    position: 'Head of Operation and Finance',
    socials: {
      name: 'email',
      link: 'mailto:pranjalt7869@gmail.com',
    },
  },
];

export const members: MemberProps[] = [
  {
    name: 'Deep Shikha',
    team: 'design',
    position: 'Design Lead',
    image: '1.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:17deepshikha03@gmail.com',
    },
  },
  {
    name: 'Nababrata Deb',
    team: 'tech',
    position: 'Tech Lead',
    image: '2.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:nababratadeb5@gmail.com',
    },
  },
  {
    name: 'Pratnadeep Banik ',
    team: 'events',
    position: 'Events Team Head',
    image: '3.jpg',
    socials: {
      name: 'email',
      link: 'mailto:pratnadeepbanik010@gmail.com',
    },
  },
  {
    name: 'Rohit Nori',
    team: 'startup',
    position: 'Core Member',
    image: '4.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:rohitnori11@gmail.com',
    },
  },
  {
    name: 'Tanmay Shree',
    team: 'tech',
    position: 'Tech Lead',
    image: '5.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:tanmay.25ts@gmail.com',
    },
  },
  {
    name: 'Triasha Roy',
    team: 'content',
    position: 'Core Content Team',
    image: '6.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:triasharoy.ecell@gmail.com',
    },
  },
  {
    name: 'Srija Das',
    team: 'all',
    position: 'Senior Executive',
    image: '7.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:srijadas653@gmail.com',
    },
  },
  {
    name: 'Janmesh Joshi',
    team: 'all',
    position: 'Alumni',
    image: '8.jpg',
    socials: {
      name: 'email',
      link: 'mailto:janmeshjoshi1510@gmail.com',
    },
  },
  {
    name: 'Dharun Shankar',
    team: 'startup',
    position: 'Former Startup Development Head',
    image: '9.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:dharunshankarr@gmail.com',
    },
  },
  {
    name: 'Bodhisatwa Chakraborty',
    team: 'design',
    position: 'Design Lead',
    image: '10.png',
    socials: {
      name: 'email',
      link: 'mailto:bodhagt18@gmail.com',
    },
  },
  {
    name: 'Debarati Hati',
    team: 'design',
    position: 'Core Design Team Member',
    image: '11.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:debaratihati.ce@gmail.com',
    },
  },
  {
    name: 'Dhruv Rohatgi',
    team: 'design',
    position: 'Design Lead',
    image: '12.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:rastogidhruv28@gmail.com',
    },
  },
  {
    name: 'Soumyadeep Rakshit',
    team: 'events',
    position: 'Event Lead',
    image: '13.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:soumyadeep280@gmail.com',
    },
  },
  {
    name: 'Keshav Agrawal',
    team: 'alumni',
    position: 'Head of Alumni Affairs',
    image: '14.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:keshavagrawal9471408042@gmail.com',
    },
  },
  {
    name: 'Soumyajit Das',
    team: 'startup',
    position: 'Startup Development Lead',
    image: '15.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:soumyajitdhoni@gmail.com',
    },
  },
  {
    name: 'Prakhar Saxena',
    team: 'finance',
    position: 'Finance Team Lead',
    image: '16.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:pks8958saxena@gmail.com',
    },
  },
  {
    name: 'Anwesha Das',
    team: 'social-media',
    position: 'Social media and PR lead',
    image: '17.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:anweshadas314@gmail.com',
    },
  },
  {
    name: 'Arinima Gupta',
    team: 'content',
    position: 'Content Lead',
    image: '18.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:arinimagupta17@gmail.com',
    },
  },
  {
    name: 'Akhini Debbarma',
    team: 'content',
    position: 'Core Content Team Member',
    image: '19.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:akhinidebbarma20@gmail.com',
    },
  },
  {
    name: 'Ankit Patnaik',
    team: 'events',
    position: 'Events Team Lead',
    image: '20.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:ankit.123patnaik123@gmail.com',
    },
  },
  {
    name: 'Sumit Sharma',
    team: 'social-media',
    position: 'PR Lead',
    image: '21.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:sharmasumit25929@gmail.com',
    },
  },
  {
    name: 'Vedant Chainani',
    team: 'tech',
    position: 'Tech Team Member',
    image: '32.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:vedantchainani1084@gmail.com',
    },
  },
  {
    name: 'Aditya pandey',
    team: 'social-media',
    position: 'Social Media Team Member',
    image: '22.png',
    socials: {
      name: 'email',
      link: 'mailto:adityapandeyy0802@gmail.com',
    },
  },
  {
    name: 'Debaditya Roy',
    team: 'design',
    position: 'Design Team Member',
    image: '23.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:debadityaroy99@gmail.com',
    },
  },
  {
    name: 'Navya Sri Thalluri',
    team: 'social-media',
    position: 'PR Team Member',
    image: '24.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:navyathalluri2022@gmail.com',
    },
  },
  {
    name: 'Shubham Kumar',
    team: 'content',
    position: 'Content Team Member',
    image: '25.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:shubhamgnirala@gmail.com',
    },
  },
  {
    name: 'Shilpi Rani',
    team: 'design',
    position: 'Design Team Member',
    image: '26.jpeg',
    socials: {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/shilpi-singh-52183b251',
    },
  },
  {
    name: 'Goparaju Manasa',
    team: 'content',
    position: 'Content Team Member',
    image: '27.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:manasa.g233@gmail.com',
    },
  },
  {
    name: 'Ashutosh Singh',
    team: 'content',
    position: 'Content Team Member',
    image: '28.jpeg',
    socials: {
      name: 'twitter',
      link: 'https://twitter.com/connect_to_mars',
    },
  },
  {
    name: 'Sourav Das',
    team: 'design',
    position: 'Design Team Member',
    image: '29.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:dass55139@gmail.com',
    },
  },
  {
    name: 'Sohan sabbana',
    team: 'tech',
    position: 'Tech Team Member',
    image: '30.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:sohan.sabbana@gmail.com',
    },
  },
  {
    name: 'Yash Raj',
    team: 'design',
    position: 'Design Team Member',
    image: '31.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:yashrajsomu16@gmail.com',
    },
  },
  {
    name: 'Dishank Patil',
    team: 'tech',
    position: 'Tech Team Member',
    image: '33.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:dishankjp05@gmail.com',
    },
  },
  {
    name: 'Siddhanth Sethi',
    team: 'tech',
    position: 'Tech Team Member',
    image: '35.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:siddhanth1105@gmail.com',
    },
  },
  {
    name: 'Satabdi Goswami',
    team: 'tech',
    position: 'Tech Team Member',
    image: '34.jpeg',
    socials: {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/satabdi-goswami-271903256/',
    },
  },
];
