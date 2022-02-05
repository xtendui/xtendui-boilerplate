const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const dirNode = 'node_modules'
const dirSrc = path.join(__dirname, 'src')
const dirAssets = path.join(__dirname, 'src/assets')

module.exports = () => {
  return {
    entry: {
      main: path.join(dirSrc, 'app'),
    },
    resolve: {
      modules: [dirNode, dirSrc],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(dirSrc, 'index.html'),
        minify: false,
      }),
      new MiniCssExtractPlugin(),
      new CopyWebpackPlugin({
        patterns: [{ from: dirAssets, to: 'assets' }],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: {
            and: [/node_modules/],
            not: [/node_modules\/xtendui/],
          },
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
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
    },
  }
}
