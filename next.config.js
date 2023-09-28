/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgflip.com",
      },
    ],
  },
};

module.exports = nextConfig;

