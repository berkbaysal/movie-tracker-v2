/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.themoviedb.org', 'image.tmdb.org', 'img.youtube.com'],
  },
};

module.exports = nextConfig;
