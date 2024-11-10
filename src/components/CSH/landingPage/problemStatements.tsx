import Link from 'next/link';

import { Camera, ChevronRight, Lock, Monitor, Star } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  route: string;
}

function Card({ icon, title, description, route }: CardProps) {
  return (
    <Link
      className='rounded-xl bg-purple-900/20 p-6 backdrop-blur-md backdrop-filter'
      href={`/CSH/problems/${route}`}
    >
      <div className='flex flex-col items-start'>
        <div className='flex justify-between items-center w-full my-2'>
          <span className='rounded-full bg-purple-500/10 p-2 text-white'>{icon}</span>
          <span className='rounded-full bg-purple-500/10 p-2 text-white'><ChevronRight/></span>
        </div>
        <div className='space-y-2'>
          <h3 className='text-xl font-semibold text-white'>{title}</h3>
          <p className='text-sm leading-relaxed text-white/70'>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function ProblemStatements() {
  const cards = [
    {
      icon: <Monitor className='h-5 w-5' />,
      title: 'Cyber Security Hackathon',
      description:
        'Participants will demonstrate their proficiency in cybersecurity by applying essential tools and techniques to solve practical challenges. They should produce solutions and insights that address each specific threat, showing readiness to tackle real-world cybersecurity issues.',
      route: 'cybersecurity',
    },
    {
      icon: <Lock className='h-5 w-5' />,
      title: 'Innovation for Clean Homes and Cities',
      description:
        'Develop strategies and solutions that promote cleaner, healthier, and eco-friendlier environments in urban and residential areas. Focus on waste reduction, pollution control, and sustainable urban planning to enhance the quality of life and environmental health.',
      route: 'clean-home-cities',
    },
    {
      icon: <Camera className='h-5 w-5' />,
      title:
        'Low-Water Use Public Toilets with Digital Monitoring and Control Systems',
      description:
        'Design a public restroom system that minimizes water consumption while ensuring cleanliness, hygiene, and efficient maintenance in high-traffic areas. Incorporate digital monitoring and control systems to enhance maintenance and user experience.',
      route: 'low-water-use-public-toilets',
    },
    {
      icon: <Star className='h-5 w-5' />,
      title: '“May I Help You” Robot Design',
      description:
        'Design a "May I Help You" robotic assistant to enhance convenience and safety in public settings such as schools, hospitals, and malls. Consider essential features that would make the robot capable of guiding, assisting, and interacting with people in these environments.',
      route: 'robot-design',
    },
    {
      icon: <Star className='h-5 w-5' />,
      title: 'Open Innovation Challenge',
      description:
        'Identify a significant real-world problem and propose an innovative solution in a focus area such as sustainability, education, or healthcare. The solution should address the core aspects of the issue and demonstrate potential for real-world impact and scalability.',
      route: 'open-innovation',
    },
  ];

  return (
    <div className='relative mx-auto md:max-w-[80%] w-[90%] px-6 py-24 mt-10'>
      <h1 className='mb-16 text-balance text-[clamp(2rem,7vw,5.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white/95'>
        Problem Statements
      </h1>

      <div className='grid gap-6 md:grid-cols-2'>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
