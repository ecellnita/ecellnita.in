'use client';

import React, { useEffect } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { TracingBeam } from '~/sections/initiatives';

import { blogs } from '~/data/blogs';

import BlogContent from '~/components/Blog/BlogContent';

import EventsHeaderImage from '~/assets/events-header.svg';

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
    <div className='relative mt-28'>
      <Image
        src={EventsHeaderImage as unknown as string}
        className='pointer-events-none absolute left-1/2 top-0 z-0 w-full -translate-x-1/2 -translate-y-1/3 scale-125'
        height={1200}
        width={1448}
        alt=''
        aria-hidden
      />
      <TracingBeam className='relative z-[1] px-6'>
        <div className='mx-auto max-w-2xl p-6 pl-6 pt-4 sm:pl-0'>
          <h1 className='title-gradient mb-4 py-1 text-[2rem] font-semibold leading-[1.3] sm:text-5xl'>
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
      </TracingBeam>
    </div>
  );
}

export default BlogPage;
