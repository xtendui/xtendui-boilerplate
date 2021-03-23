const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = env => {
  return merge(common(env), {
    mode: 'development',
    devtool: 'source-map',
    output: {
      pathinfo: true,
      publicPath: '/',
      filename: '[name].bundle.js',
    },
    devServer: {
      port: '9000',
      open: true,
      inline: true,
      hot: true,
      publicPath: '/',
      contentBase: path.resolve(__dirname, 'public'),
      watchContentBase: true,
    },
  })
}
