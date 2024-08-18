import localFont from 'next/font/local';

import type { Metadata } from 'next';
import { SmoothScrollProvider } from '~/providers';
import '~/styles/globals.css';

const sfPro = localFont({
  src: '../../public/SF Pro.ttf',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'E-Cell NIT-A',
  description:
    'Empowering young entrepreneurs at NIT Agartala. Nurturing innovation and fostering a thriving startup ecosystem.',
  openGraph: {
    title: 'E-Cell NIT-A',
    description:
      'Empowering young entrepreneurs at NIT Agartala. Nurturing innovation and fostering a thriving startup ecosystem.',
    images: [
      {
        url: 'https://i.ibb.co/WyGBvGT/OG.png',
        width: 1200,
        height: 630,
        alt: 'E-Cell NIT-A OG Image',
        type: 'image/png',
      },
    ],

    url: 'https://ecellnita.in',
  },
  keywords: [
    'E-Cell NIT-A',
    'Entrepreneurship',
    'NIT Agartala',
    'Startup',
    'Innovation',
    'E-Cell',
  ],
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`font-sans ${sfPro.variable}`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
