"use client"

import localFont from 'next/font/local';

import { SmoothScrollProvider } from '~/providers';
import '~/styles/globals.css';
import Sidepanel from '~/components/CSH/dashboad/Sidepanel';

const sfPro = localFont({
  src: '../../../../public/SF Pro.ttf',
  variable: '--font-sans',
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`font-sans ${sfPro.variable}`}>
        <SmoothScrollProvider>
            <Sidepanel/>
            {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
