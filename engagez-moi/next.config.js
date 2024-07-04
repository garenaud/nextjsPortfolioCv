const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  swcMinify: true,
  assetPrefix: isProd ? '/nextjsPortfolioCv/engagez-moi/' : '',
  basePath: isProd ? '/nextjsPortfolioCv/engagez-moi' : '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    basePath: isProd ? '/nextjsPortfolioCv/engagez-moi' : '',
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
