const gulp = require('gulp')
const { parallel, series } = require('gulp')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const clean = require('gulp-clean')
const uglify = require('gulp-uglify')
const postcss = require('gulp-postcss')
const browserSync = require('browser-sync').create()
const babelify = require('babelify')
const browserify = require('browserify')
const sourcemaps = require('gulp-sourcemaps')

const cleanPublic = () => {
  return gulp.src('public', { read: false, allowEmpty: true }).pipe(clean())
}

const html = () => {
  return gulp.src('src/*.html').pipe(gulp.dest('public')).pipe(browserSync.stream())
}

const css = () => {
  return gulp.src('src/app.css').pipe(postcss()).pipe(gulp.dest('public')).pipe(browserSync.stream())
}

const js = () => {
  const b = browserify({
    entries: 'src/app.js',
  }).transform(babelify, {
    global: true,
    ignore: [/\/node_modules\/(?!xtendui\/)/],
  })
  return b
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream())
}

const asset = () => {
  return gulp.src('src/assets/*').pipe(gulp.dest('public/assets'))
}

const watchFiles = () => {
  gulp.watch('src/**/*.css', css)
  gulp.watch('src/**/*.js', js)
  gulp.watch('src/**/*.html', html)
  gulp.watch('src/assets/**/*', asset)
}

const browser = () => {
  browserSync.init({
    server: {
      baseDir: 'public/',
    },
  })
  gulp.watch('src/**/*.css', css)
  gulp.watch('src/**/*.js', js)
  gulp.watch('src/**/*.html', html)
  gulp.watch('src/assets/**/*', asset)
}

const build = series(cleanPublic, parallel(html, css, js, asset))

const dev = series(cleanPublic, parallel(html, css, js, asset, browser))

const watch = series(cleanPublic, parallel(html, css, js, asset, watchFiles))

exports.default = build

exports.build = build

exports.dev = dev

exports.watch = watch
