await import('./src/env.js');

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.ibb.co',
        protocol: 'https',
      },
      {
        hostname: 'drive.google.com',
        protocol: 'https',
      },
    ],
  },
};

export default config;
