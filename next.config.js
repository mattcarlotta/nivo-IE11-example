module.exports = {
  webpack(config, { isServer, defaultLoaders }) {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        loader: defaultLoaders.babel,
        include: /[\\/]node_modules[\\/](d3-scale)[\\/]/,
      });
    }

    return config;
  },
};
