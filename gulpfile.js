let gulp = require('gulp')
let Browser = require('browser-sync')
let webpack = require('webpack')
let webpackDevMiddleware = require('webpack-dev-middleware')

/**
 * build
 */

const webpackConfig = require('./webpack.config.js')

function buildTaks() {
  return new Promise(resolve =>
    webpack(webpackConfig, (err, stats) => {
      if (err) console.log('Webpack', err)
      console.log(stats.toString({}))
      resolve()
    })
  )
}

/**
 * dev and serve
 */

const webpackConfigDev = Object.assign({}, webpackConfig)
webpackConfigDev.watch = true

function devTask() {
  return new Promise(resolve =>
    webpack(webpackConfigDev, (err, stats) => {
      if (err) console.log('Webpack', err)
      console.log(stats.toString({}))
      resolve()
    })
  )
}

const browser = Browser.create()
const bundler = webpack(webpackConfigDev)

function serveTask() {
  browser.init({
    server: 'dist',
    port: 9000,
    open: false,
    watch: true,
    middleware: [webpackDevMiddleware(bundler, { watch: true })],
  })
  //gulp.watch('dist/**/*', gulp.series(reload))
  //gulp.watch('dist/**/*').on('change', () => browser.reload())
}

/**
 * tasks
 */

gulp.task('build', gulp.series(buildTaks))
gulp.task('dev', gulp.series(devTask, serveTask))
gulp.task('default', gulp.series('build'))
