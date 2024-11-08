import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['links.papareact.com', 'image.tmdb.org'],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;

