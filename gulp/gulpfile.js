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
  return gulp.src('src/*.html').pipe(gulp.dest('public'))
}

const css = () => {
  return gulp
    .src('css/app.css')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(postcss())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream())
}

const js = () => {
  let b = browserify({
    entries: 'src/app.js',
  }).transform(babelify, { global: true })
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('public'))
}

const asset = () => {
  return gulp.src('assets/*').pipe(gulp.dest('public/assets'))
}

const watch = () => {
  browserSync.init({
    server: {
      baseDir: 'public/',
    },
  })
  gulp.watch('css/**/*.*', css)
  gulp.watch('src/**/*.*', js).on('change', browserSync.reload)
  gulp.watch('src/*.html', html).on('change', browserSync.reload)
}

const dev = series(cleanPublic, parallel(html, css, js, asset, watch))

const build = series(cleanPublic, parallel(html, css, js, asset))

exports.default = dev

exports.dev = dev

exports.build = build
