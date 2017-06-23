module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/bin/',
    publicPath: 'bin/',
    filename: 'server.js'
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
