/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'myecommerce.local',
      },
    ],
  },
  target: 'serverless',
};

module.exports = nextConfig;
