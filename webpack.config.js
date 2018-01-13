module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
