"use client"

import { CircleGauge, FilePenLine, LogOut } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

function Sidepanel() {
    const router = useRouter();

    const pathname = usePathname();
  return (
    <div className='absolute top-0 left-0 h-[100svh] w-[15%] border-r-2 z-20'>
        <div className='flex h-[20svh] justify-center items-center'>
            <h2 className='text-white font-semibold text-lg'>IEIF</h2>
        </div>
        <div className='flex flex-col justify-center items-start w-full px-2 h-[30svh]'>
            <li className={`flex justify-start items-center my-1 py-4 px-4 cursor-pointer rounded-lg hover:bg-[#0c0c29] w-full ${pathname === 'dashboard' ? 'bg-[#0c0c29]' : ''}`} onClick={()=>router.push('view')}>
                <CircleGauge className='mr-4' />
                Dashboard
            </li>
            <li className={`flex justify-start items-center my-1 py-4 px-4 cursor-pointer rounded-lg hover:bg-[#0c0c29] w-full ${pathname === 'editteam' ? 'bg-[#0c0c29]' : ''}`} onClick={()=>alert("Activity not started yet")}>
                <FilePenLine className='mr-4' />
                Edit team
            </li>
            <li className={`flex justify-start items-center my-1 py-4 px-4 cursor-pointer rounded-lg hover:bg-[#0c0c29] w-full ${pathname === 'logout' ? 'bg-[#0c0c29]' : ''}`} onClick={()=>router.push('/CSH/login')}>
                <LogOut className='mr-4' />
                Logout
            </li>
        </div>
    </div>
  )
}

export default Sidepanel