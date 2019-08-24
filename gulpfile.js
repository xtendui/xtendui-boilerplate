let gulp = require('gulp');
let path = require('path');
let process = require('process');
let Browser = require('browser-sync');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let TerserJSPlugin = require('terser-webpack-plugin');
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * webpack
 */

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

let webpackConfig = {
  mode: env,
  context: path.resolve(__dirname, ''),
  entry: {
    'dist/assets/theme': ['./dist/assets/theme.js', './dist/assets/theme.less'],
  },
  output: {
    filename: '[name].min.js',
    path: __dirname,
  },
  resolve: {
    alias: {
      'xtend-theme': path.resolve(__dirname, 'dist/xtend-theme'), // resolve xtend-theme before xtend-library
      'xtend-library': path.resolve(__dirname, 'node_modules/xtend-library'), // resolve xtend-library
    },
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              paths: [
                path.resolve(__dirname, 'dist/xtend-theme'), // resolve xtend-theme before xtend-library
                path.resolve(__dirname, 'node_modules/xtend-library'), // resolve xtend-library
              ],
            },
          },
        ]
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
    minimizer: [new TerserJSPlugin({
      sourceMap: true,
    }), new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false,
          annotation: true,
        },
      },
    })],
  },
  devtool: 'source-map',
  stats: {
    colors: true,
  },
}

const webpackConfigDev = Object.assign({}, webpackConfig);
webpackConfigDev.watch = true;

/**
 * build
 */

function build() {
  return new Promise(resolve => webpack(webpackConfig, (err, stats) => {
    if (err) console.log('Webpack', err);
    console.log(stats.toString({}));
    resolve();
  }));
}

/**
 * dev
 */

function dev() {
  return new Promise(resolve => webpack(webpackConfigDev, (err, stats) => {
    if (err) console.log('Webpack', err);
    console.log(stats.toString({}));
    resolve();
  }));
}

/**
 * serve
 */

const browser = Browser.create();
const bundler = webpack(webpackConfigDev);

function serve() {
  browser.init({
    server: 'dist',
    port: 9000,
    open: false,
    watch: true,
    middleware: [
      webpackDevMiddleware(bundler, {watch: true})
    ],
  });
  //gulp.watch('dist/**/*', gulp.series(reload))
  //gulp.watch('dist/**/*').on('change', () => browser.reload())
}

/**
 * tasks
 */

gulp.task('build', gulp.series(build));
gulp.task('dev', gulp.series(dev, serve));
gulp.task('default', gulp.series('build'));