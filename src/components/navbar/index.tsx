'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useScrollbar } from '@14islands/r3f-scroll-rig';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Logo from '../Logo';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '/events' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '#contact' },
  { label: 'Startup Kumbh', href: '/Skumbh' },
];

type NavLink = (typeof navLinks)[number];

function isHash(href: string) {
  return href.startsWith('#');
}

function resolveActiveId(pathname: string, hash: string) {
  // If you're on "/", allow hash to control active item for section links.
  if (pathname === '/' && hash) return hash;
  return pathname || '/';
}

const Navbar = () => {
  const { scrollTo } = useScrollbar();
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);

  // activeId drives the sliding pill
  const [activeId, setActiveId] = React.useState<string>(() =>
    typeof window === 'undefined'
      ? pathname || '/'
      : resolveActiveId(pathname || '/', window.location.hash)
  );

  const [dimensions, setDimensions] = React.useState({ width: 0, left: 0 });

  const containerRef = React.useRef<HTMLDivElement>(null);
  const buttonRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());

  // Keep activeId in sync with route/hash changes
  React.useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    setActiveId(resolveActiveId(pathname || '/', hash));
  }, [pathname]);

  React.useEffect(() => {
    const onHashChange = () => {
      if (pathname !== '/') return;
      setActiveId(resolveActiveId(pathname || '/', window.location.hash));
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [pathname]);

  // Measure the active button and move the pill
  React.useLayoutEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const btn = buttonRefs.current.get(activeId);
      if (!container || !btn) return;

      const rect = btn.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();

      setDimensions({
        width: rect.width,
        left: rect.left - cRect.left,
      });
    };

    // initial + on next frame (fonts/layout)
    requestAnimationFrame(update);
    const ro = new ResizeObserver(() => update());
    if (containerRef.current) ro.observe(containerRef.current);

    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      ro.disconnect();
    };
  }, [activeId, isOpen]);

  const navItemVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerDirection: 1,
        staggerChildren: 0.08,
        ease: 'anticipate',
      },
    },
    exit: { opacity: 0, y: -10 },
  };

  const onClick = (link: NavLink) => {
    // Update active immediately for smooth feel
    setActiveId(isHash(link.href) ? link.href : link.href);

    if (link.href === '/' && pathname === '/') {
      scrollTo('#hero');
      setIsOpen(false);
      return;
    }

    if (isHash(link.href)) {
      if (pathname !== '/') router.push('/');
      // let the route settle then scroll
      requestAnimationFrame(() => scrollTo(link.href));
    } else {
      router.push(link.href);
    }

    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 z-[2] w-full px-2 pt-5">
      {/* keep glassmorphic effect EXACTLY as it is */}
      <motion.div
        layout="size"
        layoutId="navbar"
        className="top-0 mx-auto flex h-full w-full max-w-screen-lg flex-col rounded-2xl border border-[#151633] bg-[#02031d57] px-8 backdrop-blur-md"
      >
        <motion.div
          className="flex w-full flex-row items-center justify-between py-2"
          layout="preserve-aspect"
        >
          <Logo
            size={24}
            fill="#000"
            className="cursor-pointer"
            onClick={() => onClick({ label: 'Home', href: '/' })}
          />

          {/* Desktop nav with sliding pill */}
          <div
            ref={containerRef}
            className="relative hidden w-full max-w-sm flex-row items-center gap-1 rounded-xl md:flex"
          >
            {/* Sliding pill (tab switch background) */}
            <motion.div
              aria-hidden="true"
              initial={false}
              animate={{
                width: Math.max(0, dimensions.width),
                x: dimensions.left,
                opacity: dimensions.width ? 1 : 0,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 40 }}
              className={cn(
                'absolute left-0 top-0 z-0 h-full rounded-xl',
                // keep it subtle so your glass effect remains visible
                'bg-white/10 ring-1 ring-white/10 backdrop-blur-md'
              )}
            />

            <div className="relative z-10 flex w-full flex-row items-center gap-1">
              {navLinks.map((link) => {
                const id = isHash(link.href) ? link.href : link.href;
                const isActive = activeId === id;

                return (
                  <Button
                    key={link.label}
                    variant="nav"
                    className={cn(
                      'relative transition-all ease-in',
                      // ensure consistent height so pill measures correctly
                      'h-10 px-3',
                      isActive ? 'text-white' : 'text-foreground/80 hover:text-white'
                    )}
                    onClick={() => onClick(link)}
                    ref={(el: HTMLButtonElement | null) => {
                      if (!el) {
                        buttonRefs.current.delete(id);
                        return;
                      }
                      buttonRefs.current.set(id, el);
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </div>
          </div>

          <Button
            variant="primary"
            className="hidden sm:flex"
            onClick={() => onClick({ label: 'About', href: '#about' })}
          >
            Get Started
          </Button>

          <Button
            size="icon"
            variant="link"
            onClick={() => setIsOpen(!isOpen)}
            className="flex sm:hidden"
          >
            {isOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </Button>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="nav-mobile-menu"
              className="flex flex-col gap-3 py-3"
              variants={navItemVariants}
              animate="animate"
              initial="initial"
              exit="exit"
            >
              {navLinks.map((link, index) => {
                const id = isHash(link.href) ? link.href : link.href;
                const isActive = activeId === id;

                return (
                  <motion.div
                    variants={navItemVariants}
                    key={link.label}
                    exit={{
                      opacity: 0,
                      y: -20,
                      transition: { delay: 0.08 * index, ease: 'anticipate' },
                    }}
                  >
                    <Button
                      variant="nav"
                      className={cn(
                        'w-full transition-all ease-in',
                        isActive && 'bg-white/10 ring-1 ring-white/10'
                      )}
                      onClick={() => onClick(link)}
                    >
                      {link.label}
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Navbar;