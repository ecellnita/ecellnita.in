import React from 'react';
import { ContentBlock } from '~/types/blog';

interface BlogContentProps {
  blocks: ContentBlock[];
}

export default function BlogContent({ blocks }: BlogContentProps) {
  return (
    <div className='space-y-5'>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            if (block.level === 3) {
              return (
                <h3
                  key={i}
                  className='mt-8 text-xl font-bold text-white'
                >
                  {block.text}
                </h3>
              );
            }
            return (
              <h2
                key={i}
                className='mt-10 text-2xl font-bold text-white'
              >
                {block.text}
              </h2>
            );

          case 'bold':
            return (
              <p key={i} className='text-lg font-semibold text-white'>
                {block.text}
              </p>
            );

          case 'paragraph':
            return (
              <p
                key={i}
                className='text-lg font-normal leading-relaxed text-white/90'
              >
                {block.text}
              </p>
            );

          case 'bullet-list':
            return (
              <ul key={i} className='ml-6 list-disc space-y-2'>
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className='text-lg leading-relaxed text-white/90'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );

          case 'numbered-list':
            return (
              <ol key={i} className='ml-6 list-decimal space-y-2'>
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className='text-lg leading-relaxed text-white/90'
                  >
                    {item}
                  </li>
                ))}
              </ol>
            );

          case 'quote':
            return (
              <blockquote
                key={i}
                className='border-l-4 border-pink-500 pl-5 py-1 italic text-lg text-white/80'
              >
                {block.text}
              </blockquote>
            );

          case 'note':
            return (
              <p
                key={i}
                className='text-sm italic text-white/50'
              >
                {block.text}
              </p>
            );

          case 'divider':
            return (
              <hr
                key={i}
                className='border-white/10 my-6'
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
