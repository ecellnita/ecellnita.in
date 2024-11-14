import { Calendar, MapPin, Minus } from 'lucide-react';

export default function HeroText() {
  return (
    <div className='relative overflow-hidden px-4 py-8 text-white sm:px-6 lg:px-8'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')]"></div>
      </div>
      <div className='relative mx-auto w-full'>
        <h2 className='mb-2 text-center text-2xl font-bold sm:text-3xl md:text-5xl'>
          CyberSecurity
        </h2>
        <div className='mb-6 flex items-center justify-center space-x-2'>
          <span className='text-4xl font-bold text-[#FFA500] sm:text-5xl md:text-8xl'>{`{`}</span>
          <h1 className='text-4xl font-extrabold sm:text-5xl md:text-7xl'>
            <span className='text-white'>HA</span>
            <span className='text-[#FFA500]'>C</span>
            <span className='text-white'>KATH</span>
            <span className='text-[#FFA500]'>ON</span>
          </h1>
          <span className='text-4xl font-bold text-[#FFA500] sm:text-5xl md:text-8xl'>{`}`}</span>
        </div>
        <div className='mt-12 flex flex-col items-start md:items-center justify-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0'>
          <div className='flex items-center space-x-2'>
            <Calendar className='text-white w-4 md:w-16' />
            <div>
              <p className='text-sm md:text-lg font-bold'>
                6<sup>TH</sup> NOV
              </p>
              <p className='text-sm font-semibold'>Registration Starts</p>
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <Minus className='rotate-90 text-white w-4 md:w-16' />
            <div>
              <p className='text-sm md:text-lg font-bold'>
                19<sup>TH</sup> NOV
              </p>
              <p className='text-sm font-semibold'>Finale</p>
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <MapPin className='text-white w-4 md:w-16' />
            <div>
              <p className='text-sm md:text-lg font-bold'>NIT AGARTALA</p>
              <p className='text-sm font-semibold'>
                Jirania, Agartala, Tripura 799046
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
