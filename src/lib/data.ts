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
    name: 'Ashutosh Singh',
    image: '1.jpeg',
    position: 'President',
    socials: {
      name: 'email',
      link: 'mailto:ashutoshsingh9010@gmail.com',
    },
  },
  {
    name: 'Goparaju Manasa',
    image: '2.jpeg',
    position: 'Vice President',
    socials: {
      name: 'email',
      link: 'mailto:manasa.g233@gmail.com',
    },
  },
  
  {
    name: 'Yash Raj',
    image: '4.jpeg',
    position: 'General Secretary ',
    socials: {
      name: 'email',
      link: 'mailto:yashrajsomu16@gmail.com',
    },
  },
  {
    name: 'Dishank Patil',
    image: '3.jpeg',
    position: 'General Secretary',
    socials: {
      name: 'email',
      link: 'mailto:dishankpatil360@gmail.com',
    },
  },
  {
    name: 'Debaditya Roy',
    image: '5.jpeg',
    position: 'Head Of Operations',
    socials: {
      name: 'email',
      link: 'mailto:debadityaroy99@gmail.com',
    },
  },
  {
    name: 'Satabdi Goswami',
    image: '6.jpeg',
    position: 'Startup and Development Lead',
    socials: {
      name: 'email',
      link: 'mailto:satabdigoswami87@gmail.com',
    },
  },
  {
    name: 'Shubham Kumar',
    image: '7.jpeg',
    position: 'Finance Secretary',
    socials: {
      name: 'email',
      link: 'mailto:shubhamgnirala@gmail.com',
    },
  },
  {
    name: 'Shilpi Rani',
    image: '8.jpeg',
    position: 'General Manager, Media & Communications',
    socials: {
      name: 'email',
      link: 'mailto:theshilpisingh1@gmail.com',
    },
  },
  {
    name: 'Navya Sri',
    image: '9.jpeg',
    position: 'Head of External Affairs',
    socials: {
      name: 'email',
      link: 'mailto:navyathalluri2022@gmail.com',
    },
  },
  {
    name: 'Sourav Das',
    image: '10.jpeg',
    position: 'General Manager, Design & Tech',
    socials: {
      name: 'email',
      link: 'mailto:dass55139@gmail.com',
    },
  },
  {
    name: 'Sohan Sabbana',
    image: '11.jpeg',
    position: 'Head of Alumni Affairs',
    socials: {
      name: 'email',
      link: 'mailto:sohan.sabbana@gmail.com',
    },
  },
  {
    name: 'Aditya pandey',
    image: '12.jpeg',
    position: 'Head of Corporate Relations',
    socials: {
      name: 'email',
      link: 'mailto:adityapandeyy0802@gmail.com',
    },
  },
  // {
  //   name: 'Sourav Das',
  //   image: '10.jpeg',
  //   position: 'General Manager',
  //   socials: {
  //     name: 'email',
  //     link: 'mailto:dass55139@gmail.com',
  //   },
  // },
  // {
  //   name: 'Sourav Das',
  //   image: '10.jpeg',
  //   position: 'General Manager',
  //   socials: {
  //     name: 'email',
  //     link: 'mailto:dass55139@gmail.com',
  //   },
  // }
];

export const members: MemberProps[] = [
  {
    name: 'Satyam Kumar Kesarwani',
    team: 'tech',
    position: 'Senior Core Tech Member',
    image: '1.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:satyamkesarwani2020@gmail.com',
    },
  },
  {
    name: 'Aemili',
    team: 'design',
    position: 'Senior Core Design Member',
    image: '2.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:aemili21@gmail.com',
    },
  },
  {
    name: 'Srishant Kumar',
    team: 'design',
    position: 'Senior Core Design Member',
    image: '3.jpg',
    socials: {
      name: 'email',
      link: 'mailto:srishantyadav@outlook.com',
    },
  },
  {
    name: 'Anshu Pal',
    team: 'social-media',
    position: 'Senior Core PR Member',
    image: '4.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:connectwithme.anshupal@gmail.com',
    },
  },
  {
    name: 'Shubham Kumar Jha',
    team: 'social-media',
    position: 'Senior Core PR Member',
    image: '5.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:shubhamkumarjha065@gmail.com',
    },
  },
  {
    name: 'Sourasnata Debnath',
    team: 'social-media',
    position: 'Senior Core Content Member',
    image: '6.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:debnathsourasnata@gmail.com',
    },
  },
  {
    name: 'Swaparup Mukherjee',
    team: 'tech',
    position: 'Senior Core Tech Member',
    image: '7.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:swaparup36@gmail.com',
    },
  },
  
  {
    name: 'Sampurna Mondal',
    team: 'content',
    position: 'Senior Core Content Member',
    image: '8.jpg',
    socials: {
      name: 'email',
      link: 'mailto:mondalsampurna012@gmail.com',
    },
  },
  {
    name: 'Ayush Anand',
    team: 'content',
    position: 'Senior Core Content Member',
    image: '9.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:ayushanand3008@gmail.com',
    },
  },
  {
    name: 'Rimjhim Gupta',
    team: 'finance',
    position: 'Senior Core Finance Member',
    image: '10.png',
    socials: {
      name: 'email',
      link: 'mailto:rimjhimgupta8112002@gmail.com',
    },
  },
  {
    name: 'Somesh Raj',
    team: 'social-media',
    position: 'Senior Core Social Media Member',
    image: '11.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:someshbabaofficial@gmail.com',
    },
  },
  {
    name: 'Anurag Pandey',
    team: 'alumni',
    position: 'Senior Core Alumni Member',
    image: '12.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:ap0063872@gmail.com',
    },
  },
  {
    name: 'Kumar Anubhav',
    team: 'events',
    position: 'Senior Core Event Member',
    image: '13.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:anubhav2608@gmail.com',
    },
  },
  {
    name: 'Ankit kumar',
    team: 'all',
    position: 'Senior Core Tech Member',
    image: '14.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:ankitkumar11@gmail.com',
    },
  },
  {
    name: 'Printi Kumari',
    team: 'events',
    position: 'Senior Core Event Member',
    image: '15.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:kumariprinti891@gmail.com',
    },
  },
  {
    name: 'Anjali',
    team: 'design',
    position: 'Senior Core Design Member',
    image: '16.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:anjaliiprajapati04@gmail.com',
    },
  },
  {
    name: 'Rinki',
    team: 'tech',
    position: 'Senior Core Tech Member',
    image: '17.jpeg',
    socials: {
      name: 'email',
      link: 'mailto:jhunjhunwalarinki@gmail.com',
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
