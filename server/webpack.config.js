module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname +'/build/',
    filename: 'index.js'
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
}
