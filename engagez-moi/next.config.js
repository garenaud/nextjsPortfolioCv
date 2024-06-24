module.exports = {
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,   // Vérifiez les changements toutes les secondes
        aggregateTimeout: 300,  // Retarde le build après le premier changement
      }
      return config
    },
  }