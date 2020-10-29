const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common')

const dirPublic = path.join(__dirname, 'public')

module.exports = env => {
  return merge(common(env), {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: dirPublic,
      filename: '[name].[contenthash].bundle.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [{ from: path.join(__dirname, 'assets'), to: 'assets' }],
      }),
    ],
  })
}
