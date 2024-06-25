module.exports = {
  swcMinify: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,  // Vérifiez les changements toutes les secondes
        aggregateTimeout: 300,  // Regroupe les changements pour éviter des recompilations trop fréquentes
        ignored: /node_modules/, // Ignore les changements dans node_modules
      };
    }
    return config;
  },
};