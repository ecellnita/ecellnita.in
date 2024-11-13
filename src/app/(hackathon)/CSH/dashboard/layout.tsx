'use client';

import { SmoothScrollProvider } from '~/providers';
import '~/styles/globals.css';

import Sidepanel from '~/components/CSH/dashboad/Sidepanel';
import { saveAs } from 'file-saver';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`font-sans`}>
        <SmoothScrollProvider>
          <Sidepanel />
          {children}
          <div className='w-full text-white flex justify-end items-center'>
            <div className='w-[85%] px-10 py-5 z-40'>
              <span onClick={()=>saveAs("/CSH/RulebookCHS.pdf", "RulebookCHS.pdf")} className='underline cursor-pointer'>Download Rulebook</span>
            </div>
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
