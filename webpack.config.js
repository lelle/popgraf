module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: `${__dirname}/public/dist/`,
    publicPath: '/public/dist/',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  devtool: 'source-map'
};
