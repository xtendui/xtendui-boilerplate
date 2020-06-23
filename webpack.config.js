const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
  mode: env,
  context: path.resolve(__dirname, ''),
  entry: {
    'dist/assets/theme': ['./dist/assets/theme.js', './dist/assets/theme.less'],
  },
  output: {
    filename: '[name].min.js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                paths: [path.resolve(__dirname, './dist'), path.resolve(__dirname, './node_modules')],
              }
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  devtool: 'source-map',
  stats: {
    colors: true,
  },
}
