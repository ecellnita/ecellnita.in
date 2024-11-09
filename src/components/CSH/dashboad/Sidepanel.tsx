import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CircleGauge, FilePenLine, LogOut } from 'lucide-react';

function Sidepanel() {
  const pathname = usePathname();
  return (
    <div className='fixed left-0 top-0 z-20 h-[100svh] w-[15%] border-r-2'>
      <div className='flex h-[20svh] items-center justify-center'>
        <h2 className='text-lg font-semibold text-white'>CSH</h2>
      </div>
      <div className='flex h-[30svh] w-full flex-col items-start justify-center px-2'>
        <Link
          href='/CSH/dashboard/view'
          className={`my-1 flex w-full cursor-pointer items-center justify-start rounded-lg px-4 py-4 hover:bg-[#0c0c29] ${pathname === 'dashboard' ? 'bg-[#0c0c29]' : ''}`}
        >
          <CircleGauge className='mr-4' />
          Dashboard
        </Link>
        <Link
          href='/CSH/dashboard/edit'
          className={`my-1 flex w-full cursor-pointer items-center justify-start rounded-lg px-4 py-4 hover:bg-[#0c0c29] ${pathname === 'editteam' ? 'bg-[#0c0c29]' : ''}`}
        >
          <FilePenLine className='mr-4' />
          Edit team
        </Link>
        <Link
          href='/CSH/login'
          className={`my-1 flex w-full cursor-pointer items-center justify-start rounded-lg px-4 py-4 hover:bg-[#0c0c29] ${pathname === 'logout' ? 'bg-[#0c0c29]' : ''}`}
        >
          <LogOut className='mr-4' />
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidepanel;
