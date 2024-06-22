module.exports = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (dev && isServer) {
      config.watchOptions = {
        poll: 1000,   // Check for changes every second
        aggregateTimeout: 300,  // Delay before rebuilding
      };
    }
    return config;
  },
};
