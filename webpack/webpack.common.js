const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const dirNode = 'node_modules'
const dirSrc = path.join(__dirname, 'src')
const dirStyles = path.join(__dirname, 'styles')
const dirAssets = path.join(__dirname, 'assets')

module.exports = () => {
  const IS_DEV = process.env.NODE_ENV === 'development'
  return {
    entry: {
      main: path.join(dirSrc, 'app'),
    },
    resolve: {
      modules: [dirNode, dirSrc, dirStyles, dirAssets],
    },
    plugins: [
      new webpack.DefinePlugin({ IS_DEV }),
      new HtmlWebpackPlugin({
        template: path.join(dirSrc, 'index.ejs'),
        title: 'Webpack Boilerplate',
      }),
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [{ from: path.join(__dirname, 'assets'), to: 'assets' }],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              compact: true,
            },
          },
        },
        {
          test: /\.css/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: IS_DEV,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: IS_DEV,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      minimizer: [new CssMinimizerPlugin()],
    },
  }
}
