/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';
const BASE_PATH = 'calcs';
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  scope: `${BASE_PATH}/`,
  disable: isDev
});

const nextConfig = withPWA({
  eslint: {
    dirs: ['src'],
  },
  output: isDev ? undefined : 'export',
  basePath: isDev ? '' : `/${BASE_PATH}`,
  assetPrefix: isDev ? undefined : '/calcs/',

  distDir: 'build',

  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
});

module.exports = nextConfig;
