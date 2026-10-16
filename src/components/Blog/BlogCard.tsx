'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Blog } from '~/types/blog';

type BlogCardProps = Pick<Blog, 'id' | 'image' | 'title' | 'excerpt' | 'author' | 'date'>;

const BlogCard = ({ id, image, title, excerpt, author, date }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${id}`} className='group block'>
      <div className='flex h-full flex-col overflow-hidden rounded-2xl border border-[#2a2f58] bg-[#0a0f2f66] backdrop-blur-sm transition-all duration-300 hover:border-[#4a4f88] hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(99,68,245,0.15)]'>
        {image ? (
          <Image
            className='h-48 w-full object-cover'
            src={image}
            alt={title}
            height={200}
            width={400}
          />
        ) : (
          <div className='h-48 w-full bg-[radial-gradient(ellipse_at_top_right,rgba(99,68,245,0.3)_0%,rgba(5,7,25,0)_70%)] border-b border-[#2a2f58]' />
        )}
        <div className='flex flex-1 flex-col gap-3 p-5'>
          <h2 className='text-lg font-semibold leading-snug text-white group-hover:text-primary transition-colors'>
            {title}
          </h2>
          <p className='flex-1 text-sm leading-relaxed text-[#8b8fb3]'>{excerpt}</p>
          <div className='flex items-center justify-between border-t border-[#2a2f58] pt-3 text-xs text-[#6b6f9a]'>
            <span>
              By <span className='font-medium text-[#a0a4d0]'>{author}</span>
            </span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
