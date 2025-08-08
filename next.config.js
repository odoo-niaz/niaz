/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/niaz', // replace with your repo name
  assetPrefix: '/niaz/',
};

module.exports = nextConfig;
