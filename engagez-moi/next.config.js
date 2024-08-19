import { i18n } from './next-i18next.config.mjs';
const isProd = process.env.NODE_ENV === 'production';

export default {
  swcMinify: true,
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  i18n, // Ensure i18n is included
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }
    return config;
  },
};