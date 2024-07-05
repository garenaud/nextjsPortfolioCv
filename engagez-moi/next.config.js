const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  swcMinify: true,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_ASSET_PREFIX : '',
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
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
