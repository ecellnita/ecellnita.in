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
    name: 'Shubham Kumar Jha',
    image: '1.jpeg',
    position: 'President',
    socials: {
      name: 'email',
      link: 'mailto:shubhamjha.ecellnita@gmail.com',
    },
  },
  {
    name: 'Rimjhim Gupta',
    image: '9.jpeg',
    position: 'Vice - President',
    socials: {
      name: 'email',
      link: 'mailto:rimjhim.ecell.nita@gmail.com',
    },
  },
  {
    name: 'Srishant Kumar',
    image: '6.jpeg',
    position: 'GS',
    socials: {
      name: 'email',
      link: 'mailto:Srishant@zohomail.in',
    },
  },
  {
    name: 'Anjali Prajapati',
    image: '2.jpeg',
    position: 'Head of Design',
    socials: {
      name: 'email',
      link: 'mailto:anjaliiprajapati04@gmail.com',
    },
  },
  {
    name: 'Satyam Kesarwani',
    image: '3.jpeg',
    position: 'Director Of Technical Operations',
    socials: {
      name: 'email',
      link: 'mailto:satyamkesarwani2020@gmail.com',
    },
  },
  {
    name: 'Sourasnata Debnath',
    image: '4.jpeg',
    position: 'Head of Technical Content & Board of Directors',
    socials: {
      name: 'email',
      link: 'mailto:debnathsourasnata@gmail.com',
    },
  },
  {
    name: 'Ayush Anand',
    image: '5.jpeg',
    position: 'Financial Secretary',
    socials: {
      name: 'email',
      link: 'mailto:ayushanand3008@gmail.com',
    },
  },

  {
    name: 'Rinki Jhunjhunwala',
    image: '7.jpeg',
    position: 'Head of Alumni Affairs',
    socials: {
      name: 'email',
      link: 'mailto:jhunjhunwalarinki@gmail.com',
    },
  },
  {
    name: 'Somesh Raj',
    image: '8.jpeg',
    position: 'Media & Communication Head',
    socials: {
      name: 'email',
      link: 'mailto:sombabaofficial@gmail.com',
    },
  },

  {
    name: 'Printi',
    image: '10.jpeg',
    position: 'Startup and Development Lead',
    socials: {
      name: 'email',
      link: 'mailto:kumariprinti891@gmail.com',
    },
  },
];

export const members: MemberProps[] = [
  
  {
    name: 'Arghajyoti Malakar',
    team: 'design',
    position: 'Senior Core Design Member',
    image: '2.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:arghajyotimalakar123@gmail.com',
    },
  },
  {
    name: 'Maan Singh',
    team: 'social-media',
    position: 'Senior Core PR Member',
    image: '3.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:maansimaan02@gmail.com',
    },
  },
  {
    name: 'Joydeepa Banik',
    team: 'content',
    position: 'Senior Core Content Member',
    image: '4.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:bnaikjoydeepa7442@gmail.com',
    },
  },
  {
    name: 'Ujjwal Narayan',
    team: 'social-media',
    position: 'Senior Core PR Member',
    image: '5.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:24uec044ujjwalnarayan@gmail.com',
    },
  },
  {
    name: 'Priyanka Kumari',
    team: 'tech',
    position: 'Senior Core Tech Member',
    image: '6.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:priyanka06kumari0403@gmail.com',
    },
  },
  {
    name: 'Anshika Debnath',
    team: 'social-media',
    position: 'Senior Core PR Member',
    image: '7.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:anshikadebnath2005@gmail.com',
    },
  },
  {
    name: 'Nancy Bajpai',
    team: 'design',
    position: 'Senior Core Design Member',
    image: '8.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:nancybajpai07@gmail.com',
    },
  },
  {
    name: 'Abhishek Tentiwala',
    team: 'tech',
    position: 'Senior Core Tech Member',
    image: '17.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:atentiwala@gmail.com',
    },
  },
  {
    name: 'Saksham Vishnoi',
    team: 'content',
    position: 'Senior Core Content Member',
    image: '9.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:sakshamvishnoi03@gmail.com',
    },
  },
  {
    name: 'Kajal Kumari',
    team: 'social-media',
    position: 'Senior Core PR Member',
    image: '10.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:kajalkchaubey@gmail.com',
    },
  },
  {
    name: 'Ratnadip',
    team: 'design',
    position: 'Senior Core Design Member',
    image: '11.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:ratnadipdas2005@gmail.com',
    },
  },
  {
    name: 'Aditya Kumar',
    team: 'tech',
    position: 'Senior Core Tech Member',
    image: '12.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:adityakumarnita@gmail.com',
    },
  },
  {
    name: 'Himanshu Patidar',
    team: 'social-media',
    position: 'Senior Core PR Member',
    image: '13.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:himanshupatidar4002@gmail.com',
    },
  },
  {
    name: 'Arjun Shivhare',
    team: 'finance',
    position: 'Senior Core Finance Member',
    image: '14.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:itslifearjun@gmail.com',
    },
  },
  //   {
  //     name: 'Soumyadeep Rakshit',
  //     team: 'events',
  //     position: 'Event Lead',
  //     image: '13.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:soumyadeep280@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Keshav Agrawal',
  //     team: 'alumni',
  //     position: 'Head of Alumni Affairs',
  //     image: '14.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:keshavagrawal9471408042@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Soumyajit Das',
  //     team: 'startup',
  //     position: 'Startup Development Lead',
  //     image: '15.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:soumyajitdhoni@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Prakhar Saxena',
  //     team: 'finance',
  //     position: 'Finance Team Lead',
  //     image: '16.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:pks8958saxena@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Anwesha Das',
  //     team: 'social-media',
  //     position: 'Social media and PR lead',
  //     image: '17.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:anweshadas314@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Arinima Gupta',
  //     team: 'content',
  //     position: 'Content Lead',
  //     image: '18.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:arinimagupta17@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Akhini Debbarma',
  //     team: 'content',
  //     position: 'Core Content Team Member',
  //     image: '19.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:akhinidebbarma20@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Ankit Patnaik',
  //     team: 'events',
  //     position: 'Events Team Lead',
  //     image: '20.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:ankit.123patnaik123@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Sumit Sharma',
  //     team: 'social-media',
  //     position: 'PR Lead',
  //     image: '21.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:sharmasumit25929@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Vedant Chainani',
  //     team: 'tech',
  //     position: 'Tech Team Member',
  //     image: '32.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:vedantchainani1084@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Aditya pandey',
  //     team: 'social-media',
  //     position: 'Social Media Team Member',
  //     image: '22.png',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:adityapandeyy0802@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Debaditya Roy',
  //     team: 'design',
  //     position: 'Design Team Member',
  //     image: '23.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:debadityaroy99@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Navya Sri Thalluri',
  //     team: 'social-media',
  //     position: 'PR Team Member',
  //     image: '24.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:navyathalluri2022@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Shubham Kumar',
  //     team: 'content',
  //     position: 'Content Team Member',
  //     image: '25.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:shubhamgnirala@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Shilpi Rani',
  //     team: 'design',
  //     position: 'Design Team Member',
  //     image: '26.jpeg',
  //     socials: {
  //       name: 'linkedin',
  //       link: 'https://www.linkedin.com/in/shilpi-singh-52183b251',
  //     },
  //   },
  //   {
  //     name: 'Goparaju Manasa',
  //     team: 'content',
  //     position: 'Content Team Member',
  //     image: '27.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:manasa.g233@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Ashutosh Singh',
  //     team: 'content',
  //     position: 'Content Team Member',
  //     image: '28.jpeg',
  //     socials: {
  //       name: 'twitter',
  //       link: 'https://twitter.com/connect_to_mars',
  //     },
  //   },
  //   {
  //     name: 'Sourav Das',
  //     team: 'design',
  //     position: 'Design Team Member',
  //     image: '29.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:dass55139@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Sohan sabbana',
  //     team: 'tech',
  //     position: 'Tech Team Member',
  //     image: '30.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:sohan.sabbana@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Yash Raj',
  //     team: 'design',
  //     position: 'Design Team Member',
  //     image: '31.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:yashrajsomu16@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Dishank Patil',
  //     team: 'tech',
  //     position: 'Tech Team Member',
  //     image: '33.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:dishankjp05@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Siddhanth Sethi',
  //     team: 'tech',
  //     position: 'Tech Team Member',
  //     image: '35.jpeg',
  //     socials: {
  //       name: 'email',
  //       link: 'mailto:siddhanth1105@gmail.com',
  //     },
  //   },
  //   {
  //     name: 'Satabdi Goswami',
  //     team: 'tech',
  //     position: 'Tech Team Member',
  //     image: '34.jpeg',
  //     socials: {
  //       name: 'linkedin',
  //       link: 'https://www.linkedin.com/in/satabdi-goswami-271903256/',
  //     },
  //   },
];
