'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BlogCardProps {
  id: number;
  image: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

const BlogCard = ({ id, image, title, content, author, date }: BlogCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div
      className='max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-transform hover:scale-105 hover:cursor-pointer'
      onClick={handleClick}
    >
      <Image
        className='h-48 w-full object-cover'
        src={image}
        alt={title}
        height={200}
        width={200}
      />
      <div className='p-4'>
        <h2 className='mb-2 text-xl font-bold text-gray-800'>{title}</h2>
        <p className='mb-4 text-sm text-gray-700'>
          {content.length > 100 ? `${content.substring(0, 100)}...` : content}
        </p>
        <div className='flex items-center justify-between text-sm text-gray-600'>
          <span>
            By: <span className='font-medium'>{author}</span>
          </span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
