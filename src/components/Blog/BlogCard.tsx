"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const BlogCard = ({id, image, title, content, author, date }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:cursor-pointer" onClick={handleClick}>
      <Image
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
        height={200}
        width={200}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">
          {content.length > 100 ? `${content.substring(0, 100)}...` : content}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>By: <span className="font-medium">{author}</span></span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
