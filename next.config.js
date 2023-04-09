/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // フリーの画像サイト
        hostname: 'www.pakutaso.com',
      },
    ],
  },
};

module.exports = nextConfig;
