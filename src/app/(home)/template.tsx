'use client';

import { type Variants, motion } from 'framer-motion';
import { Navbar } from '~/components';

const variants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  enter:  { opacity: 1, y: 0,  scale: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        {children}
      </motion.main>
    </>
  );
}
