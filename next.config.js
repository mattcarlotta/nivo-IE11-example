module.exports = {
  webpack(config, { defaultLoaders }) {
    config.module.rules.push({
      test: /\.js$/,
      loader: defaultLoaders.babel,
      include: /[\\/]node_modules[\\/](d3-scale)[\\/]/,
    });

    return config;
  },
};
