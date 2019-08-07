const path = require('path')


module.exports =  {
  mode : 'development',
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
  optimization: {
    runtimeChunk: 'single',
  }
}
