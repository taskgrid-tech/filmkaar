/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['commondatastorage.googleapis.com'],
    unoptimized: true,
  },

  // Add these for GitHub Pages
  output: 'export',
  basePath: '/filmkaar',   // <-- change this
  assetPrefix: '/filmkaar/', // <-- change this
};

export default nextConfig;
