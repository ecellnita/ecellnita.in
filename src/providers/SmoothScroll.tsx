'use client';

import type { PropsWithChildren } from 'react';

import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig';

const SmoothScrollProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalCanvas />
      <SmoothScrollbar />
      {children}
    </>
  );
};

export default SmoothScrollProvider;
