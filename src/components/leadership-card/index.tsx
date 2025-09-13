import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import type { ExecutiveProps } from '~/types';

const LeadershipCard = ({ name, image, position, socials }: ExecutiveProps) => {
  const { name: socialName, link } = socials;
  return (
    <div className='relative h-[24rem] w-[20rem] overflow-hidden rounded-[20px] sm:h-[24rem] sm:w-[20rem]'>
      <Image
        src={`/photos/executives/${image}`}
        width={320}
        height={480}
        alt={`${name} Profile Photo`}
        className='h-full w-full object-cover'
      />
      <div className='leadership-cover absolute bottom-0 z-[3] flex w-full flex-row items-start justify-between px-8 py-4 text-white'>
        <div className='flex flex-col'>
          <div className='text-lg'>{name}</div>
          <div className='text-sm text-white/70'>{position}</div>
        </div>
        <div className='text-white/85'>
          {socialName === 'email' && (
            <Link href={link} target='_blank'>
              <Mail size={24} />
            </Link>
          )}
          {socialName === 'twitter' && (
            <Link href={link} target='_blank'>
              <Twitter size={24} />
            </Link>
          )}
          {socialName === 'instagram' && (
            <Link href={link} target='_blank'>
              <Instagram size={24} />
            </Link>
          )}
          {socialName === 'linkedin' && (
            <Link href={link} target='_blank'>
              <Linkedin size={24} />
            </Link>
          )}
        </div>
      </div>
      <div className='leadership-cover absolute bottom-3 z-[2] flex w-full -rotate-[15deg] items-start justify-end p-12'></div>
      <div className='leadership-cover absolute bottom-3 z-[1] w-full rotate-[15deg] p-12'></div>
    </div>
  );
};

export default LeadershipCard;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   Instagram,
//   Linkedin,
//   Mail,
//   Twitter,
//   Github,
//   Globe,
// } from "lucide-react";

// import type { ExecutiveProps, SocialType } from "~/types";

// const socialIconMap: Record<SocialType, React.ElementType> = {
//   email: Mail,
//   twitter: Twitter,
//   instagram: Instagram,
//   linkedin: Linkedin,
//   github: Github,
//   website: Globe,
// };

// const LeadershipCard: React.FC<ExecutiveProps> = ({
//   name,
//   image,
//   position,
//   socials,
// }) => {
//   return (
//     <div className="group relative h-96 w-80 overflow-hidden rounded-2xl bg-gray-800 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
//       {/* Profile Image */}
//       <Image
//         src={`/photos/executives/${image}`}
//         alt={`Profile photo of ${name}`}
//         fill
//         className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       />

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

//       {/* Content */}
//       <div className="absolute bottom-0 z-10 w-full p-5 text-white">
//         <div className="flex flex-col space-y-1">
//           <h3 className="text-xl font-bold">{name}</h3>
//           <span className="inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
//             {position}
//           </span>
//         </div>

//         {/* Social Icons */}
//         <div className="mt-4 flex space-x-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
//           {Array.isArray(socials) &&
//             socials.map((social) => {
//               const IconComponent = socialIconMap[social.type];
//               if (!IconComponent) return null;

//               return (
//                 <Link
//                   key={social.type}
//                   href={social.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`Visit ${name}'s ${social.type}`}
//                   className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20"
//                 >
//                   <IconComponent size={20} />
//                 </Link>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeadershipCard;
