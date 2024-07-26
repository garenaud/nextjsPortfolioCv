const isProd = process.env.NODE_ENV === 'production';

export default {
  swcMinify: true,
  assetPrefix: isProd ? '' : '',
  basePath: isProd ? '' : '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
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
