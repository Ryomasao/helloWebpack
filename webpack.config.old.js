const path = require('path')
const webpack = require('webpack');

module.exports =  {
  entry: {
    main: ['./src/index.js'],
    sub: ['./src/other.js']
  },
  output: {
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8888
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'deps',
    })
  ]
}
