'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { CircleGauge, FilePenLine, LogOut } from 'lucide-react';
import { toast } from 'sonner';

function Sidepanel() {
  const router = useRouter();

  const pathname = usePathname();
  return (
    <div className='absolute left-0 top-0 z-20 h-[100svh] w-[15%] border-r-2'>
      <div className='flex h-[20svh] items-center justify-center'>
        <h2 className='text-lg font-semibold text-white'>IEIF</h2>
      </div>
      <div className='flex h-[30svh] w-full flex-col items-start justify-center px-2'>
        <li
          className={`my-1 flex w-full cursor-pointer items-center justify-start rounded-lg px-4 py-4 hover:bg-[#0c0c29] ${pathname === 'dashboard' ? 'bg-[#0c0c29]' : ''}`}
          onClick={() => router.push('view')}
        >
          <CircleGauge className='mr-4' />
          Dashboard
        </li>
        <li
          className={`my-1 flex w-full cursor-pointer items-center justify-start rounded-lg px-4 py-4 hover:bg-[#0c0c29] ${pathname === 'editteam' ? 'bg-[#0c0c29]' : ''}`}
          onClick={() => alert('Activity not started yet')}
        >
          <FilePenLine className='mr-4' />
          Edit team
        </li>
        <li
          className={`my-1 flex w-full cursor-pointer items-center justify-start rounded-lg px-4 py-4 hover:bg-[#0c0c29] ${pathname === 'logout' ? 'bg-[#0c0c29]' : ''}`}
          onClick={() => router.push('/CSH/login')}
        >
          <LogOut className='mr-4' />
          Logout
        </li>
      </div>
    </div>
  );
}

export default Sidepanel;
