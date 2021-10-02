const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const dirPublic = path.join(__dirname, 'public')

module.exports = env => {
  return merge(common(env), {
    mode: 'development',
    devtool: 'source-map',
    output: {
      path: dirPublic,
      pathinfo: true,
      publicPath: '/',
      filename: '[name].bundle.js',
    },
    devServer: {
      port: '9000',
      open: true,
      hot: true,
    },
  })
}
