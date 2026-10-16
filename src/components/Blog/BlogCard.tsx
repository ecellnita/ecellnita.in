'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {type  Blog } from '~/types/blog';

type BlogCardProps = Pick<Blog, 'id' | 'image' | 'title' | 'excerpt' | 'author' | 'date'>;

const BlogCard = ({ id, image, title, excerpt, author, date }: BlogCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div
      className='max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-transform hover:scale-105 hover:cursor-pointer'
      onClick={handleClick}
    >
      {image ? (
        <Image
          className='h-48 w-full object-cover'
          src={image}
          alt={title}
          height={200}
          width={200}
        />
      ) : (
        <div className='h-48 w-full bg-gradient-to-br from-purple-900 to-indigo-900' />
      )}
      <div className='p-4'>
        <h2 className='mb-2 text-xl font-bold text-gray-800'>{title}</h2>
        <p className='mb-4 text-sm text-gray-700'>{excerpt}</p>
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
