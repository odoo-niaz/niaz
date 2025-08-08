/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'niaz';

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}` : '',
  trailingSlash: true,
};

export default nextConfig;
