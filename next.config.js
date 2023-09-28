/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgflip.com",
      },

    ],
  },
};

module.exports = nextConfig;

