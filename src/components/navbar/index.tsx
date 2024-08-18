'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useScrollbar } from '@14islands/r3f-scroll-rig';
import { AnimatePresence, type Variants, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Logo from '../Logo';
import { Button } from '../ui/button';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Events',
    href: '/events',
  },
  {
    label: 'Team',
    href: '/team',
  },

  {
    label: 'Contact',
    href: '#contact',
  },
];

const Navbar = () => {
  const { scrollTo } = useScrollbar();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const navItemVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerDirection: 1,
        staggerChildren: 0.1,
        ease: 'anticipate',
      },
    },
  };

  const onClick = (link: (typeof navLinks)[number]) => {
    if (link.href === '/' && pathname === '/') {
      scrollTo('#hero');
      return;
    }
    if (link.href.startsWith('#')) {
      if (pathname !== '/') {
        router.push('/');
      }
      scrollTo(link.href);
    } else {
      router.push(link.href);
    }
    setIsOpen(false);
  };

  return (
    <div className='fixed top-0 z-[2] w-full px-2 pt-5'>
      <motion.div
        layout='size'
        layoutId='navbar'
        className='top-0 mx-auto flex h-full w-full max-w-screen-lg flex-col rounded-2xl border border-[#151633] bg-[#02031d57] px-8 backdrop-blur-md'
      >
        <motion.div
          className='flex w-full flex-row items-center justify-between py-2'
          layout='preserve-aspect'
        >
          <Logo
            size={24}
            fill='#000'
            className='cursor-pointer'
            onClick={() =>
              onClick({
                label: 'Home',
                href: '/',
              })
            }
          />

          <div className='hidden w-full max-w-sm flex-row items-center gap-4 md:flex'>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                variant='nav'
                className='transition-all ease-in'
                onClick={() => onClick(link)}
              >
                {link.label}
              </Button>
            ))}
          </div>
          <Button
            variant='primary'
            className='hidden sm:flex'
            onClick={() =>
              onClick({
                label: 'About',
                href: '#about',
              })
            }
          >
            Get Started
          </Button>
          <Button
            size='icon'
            variant='link'
            onClick={() => setIsOpen(!isOpen)}
            className='flex sm:hidden'
          >
            {isOpen ? (
              <X size={24} className='text-foreground' />
            ) : (
              <Menu size={24} className='text-foreground' />
            )}
          </Button>
        </motion.div>
        <AnimatePresence mode='wait'>
          {isOpen && (
            <motion.div
              key='nav-mobile-menu'
              className='flex flex-col gap-4 py-3'
              variants={navItemVariants}
              animate='animate'
              initial='initial'
              exit='exit'
            >
              {navLinks.map((link, index) => (
                <motion.div
                  variants={navItemVariants}
                  key={link.label}
                  exit={{
                    opacity: 0,
                    y: -20,
                    transition: {
                      delay: 0.1 * index,
                      ease: 'anticipate',
                    },
                  }}
                >
                  <Button
                    variant='nav'
                    className='w-full transition-all ease-in'
                    onClick={() => onClick(link)}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Navbar;
