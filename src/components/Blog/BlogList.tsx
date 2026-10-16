'use client';

import React, { useMemo } from 'react';
import { blogs } from '~/data/blogs';
import BlogCard from './BlogCard';

function BlogList() {
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  return (
    <div id='blogs'>
      <div className='flex justify-center gap-3'>
        <h1 className='text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>Our</h1>
        <h1 className='text-pink-500 text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>Blogs</h1>
      </div>
      <div className='container mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {sortedBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            excerpt={blog.excerpt}
            author={blog.author}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;