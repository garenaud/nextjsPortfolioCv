module.exports = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ignored: /node_modules/,
        poll: 1000, // Vérifiez les modifications toutes les secondes
        aggregateTimeout: 300, // Délai avant de relancer la compilation après une modification
        followSymlinks: false, // Ne pas suivre les liens symboliques
      };
    }
    return config;
  },
};
