'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Camera, Lock, Monitor, Star } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  route: string;
}

function Card({ icon, title, description, route }: CardProps) {
  const router = useRouter();

  return (
    <div
      className='rounded-xl bg-purple-900/20 p-6 backdrop-blur-md backdrop-filter'
      onClick={() => {
        router.push(`problems/${route}`);
      }}
    >
      <div className='flex items-start'>
        <div className='rounded-full bg-purple-500/10 p-2 text-white'>
          {icon}
        </div>
        <div className='space-y-2'>
          <h3 className='text-xl font-semibold text-white'>{title}</h3>
          <p className='text-sm leading-relaxed text-white/70'>{description}</p>
        </div>
      </div>
    </div>
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
        'Participants should propose innovative solutions focused on waste reduction, pollution control, and sustainable urban planning. Expected outputs include actionable ideas or models that illustrate how these solutions can contribute to creating greener, cleaner communities.',
      route: 'clean-home-citeis',
    },
    {
      icon: <Camera className='h-5 w-5' />,
      title:
        'Low-Water Use Public Toilets with Digital Monitoring and Control Systems',
      description:
        'Participants should develop water-efficient designs and digital monitoring systems that facilitate timely maintenance in high-traffic areas. Solutions should illustrate how technology can optimize water usage and improve hygiene, accessibility, and user satisfaction.',
      route: 'low-water-use-public-toilets',
    },
    {
      icon: <Star className='h-5 w-5' />,
      title: '“May I Help You” Robot Design',
      description:
        'Participants are expected to design a robot concept that incorporates features such as voice recognition, navigation, and interactive assistance. Solutions should demonstrate how these functionalities make the robot effective at guiding and assisting individuals in everyday environments.',
      route: 'robot-design',
    },
    {
      icon: <Star className='h-5 w-5' />,
      title: 'Open Innovation Challenge',
      description:
        'Participants are expected to present a well-defined solution addressing an issue in areas like sustainability, education, or healthcare. Outputs should include a scalable model or framework ready for expert evaluation, demonstrating the potential for meaningful real-world impact.',
      route: 'open-innovation',
    },
  ];

  return (
    <div className='relative mx-auto max-w-[80%] px-6 py-24'>
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
