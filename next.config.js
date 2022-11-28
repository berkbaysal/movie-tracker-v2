/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.themoviedb.org', 'image.tmdb.org', 'img.youtube.com'],
    deviceSizes: [350, 600, 640, 750, 828, 1080, 1200, 1440],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
