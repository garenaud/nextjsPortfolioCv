const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  swcMinify: true,
  assetPrefix: isProd ? '/nextjsPortfolioCv/' : '',
  basePath: isProd ? '/nextjsPortfolioCv' : '',
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
