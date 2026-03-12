'use client';

import React, { type ReactNode, useCallback, useEffect, useState } from 'react';

interface CarouselProps {
  children: ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const slideList = React.Children.toArray(slides);
  const [curr, setCurr] = useState(0);

  const next = useCallback(
    () =>
      setCurr((prev) => (prev === slideList.length - 1 ? 0 : prev + 1)),
    [slideList.length]
  );

  useEffect(() => {
    if (!autoSlide || slideList.length <= 1) return;
    const slideInterval = setInterval(() => {
      next();
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next, slideList.length]);

  return (
    <div className='relative flex h-[40svh] overflow-hidden md:h-[80svh]'>
      <div
        className='flex h-full w-full transition-transform duration-700 ease-out'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slideList.map((slide, index) => (
          <div key={index} className='h-full w-full flex-shrink-0'>
            {slide}
          </div>
        ))}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight />
                </button>
            </div> */}
      {/* <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((s, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div> */}
    </div>
  );
};

export default Carousel;
