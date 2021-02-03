const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common')

const dirPublic = path.join(__dirname, 'public')

module.exports = () => {
  return merge(common(), {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: dirPublic,
      filename: '[name].[contenthash].bundle.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
  })
}
