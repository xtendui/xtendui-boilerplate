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
      app: path.join(dirSrc, 'app'),
    },
    resolve: {
      modules: [dirNode, dirSrc],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(dirSrc, 'index.html'),
        minify: false,
        // https://stackoverflow.com/questions/74928998/how-do-i-reference-the-hashed-image-in-the-html-page-in-the-dist-folder-after
        // usage: <%= loadAsset('./assets/logo.svg') %>
        templateParameters: (compilation, assets, assetTags, options) => {
          return {
            compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              tags: assetTags,
              files: assets,
              options,
            },
            loadAsset: filename => {
              const parsedFilepath = path.parse(filename)
              const assetNames = Object.keys(compilation.assets).map(k => compilation.options.output.publicPath + k)
              for (let i = 0; i < assetNames.length; i++) {
                const assetName = assetNames[i]
                const parsedAssetPath = path.parse(assetName)
                const parsedAssetNameWithoutContentHash = parsedAssetPath.name.split('.')[0]
                if (
                  parsedAssetNameWithoutContentHash === parsedFilepath.name &&
                  parsedAssetPath.ext === parsedFilepath.ext
                ) {
                  return assetName
                }
              }
            },
          }
        },
      }),
      new MiniCssExtractPlugin(),
      new CopyWebpackPlugin({
        patterns: [{ from: dirAssets, to: 'assets/[name].[contenthash].[ext]' }],
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
          test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
          type: 'asset/resource',
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
    },
    performance: {
      hints: false,
    },
  }
}
