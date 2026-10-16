'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { blogs } from '~/data/blogs';
import BlogContent from '~/components/Blog/BlogContent';

function BlogPage() {
  const { blogId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blog = blogs.find((b) => b.id === parseInt(blogId as string));

  if (!blog) {
    return <p className='mt-10 text-center text-white'>Blog not found</p>;
  }

  return (
    <div className='mt-36'>
      <div className='mx-auto max-w-4xl p-6'>
        <h1 className='mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
          {blog.title}
        </h1>
        <div className='mb-6 flex items-center gap-2 text-sm text-white/70'>
          <span>
            By <span className='font-medium text-white'>{blog.author}</span>
          </span>
          <span>|</span>
          <span>Published on {blog.date}</span>
        </div>
        {blog.image ? (
          <Image
            height={600}
            width={1200}
            src={blog.image}
            alt={blog.title}
            className='mb-10 h-auto w-full rounded-lg shadow-md'
          />
        ) : null}
        <BlogContent blocks={blog.content} />
      </div>
    </div>
  );
}

export default BlogPage;
