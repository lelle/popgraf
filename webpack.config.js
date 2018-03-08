module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: `${__dirname}/public/js/`,
    publicPath: '/js/',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  mode: 'development'
};
