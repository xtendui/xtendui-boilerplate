const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common')

const dirPublic = path.join(__dirname, 'public')

module.exports = () => {
  return merge(common(), {
    mode: 'production',
    output: {
      path: dirPublic,
      publicPath: '',
      filename: '[name].[contenthash].bundle.js',
    },
    plugins: [new CleanWebpackPlugin()],
  })
}
