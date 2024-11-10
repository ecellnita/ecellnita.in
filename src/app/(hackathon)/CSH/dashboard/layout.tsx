'use client';

import { SmoothScrollProvider } from '~/providers';
import '~/styles/globals.css';

import Sidepanel from '~/components/CSH/dashboad/Sidepanel';
import { Menu } from 'lucide-react';

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
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
