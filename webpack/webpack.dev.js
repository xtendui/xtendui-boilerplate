const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = env => {
  return merge(common(env), {
    mode: 'development',
    devtool: 'eval',
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
    },
  })
}
