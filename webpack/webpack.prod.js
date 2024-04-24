const path = require('path')
const { merge } = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')
const common = require('./webpack.common')

const dirPublic = path.join(__dirname, 'public')

module.exports = () => {
  return merge(common(), {
    mode: 'production',
    output: {
      path: dirPublic,
      publicPath: '/',
      filename: '[name].[contenthash].bundle.js',
      chunkFilename: '[id].[contenthash].js',
      clean: true,
    },
    plugins: [new TerserJSPlugin()],
  })
}
