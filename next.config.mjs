/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'angeline-nj.com',
      },
      {
        protocol: 'https',
        hostname: 'angeline-nj.xyz',
      },
    ],
  },
};

export default nextConfig;
