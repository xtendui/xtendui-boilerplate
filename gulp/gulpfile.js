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

function cleanPublic(cb) {
  gulp.src('public', { read: false, allowEmpty: true }).pipe(clean())
  cb()
}

function html(cb) {
  gulp.src('src/*.html').pipe(gulp.dest('public'))
  cb()
}

function css(cb) {
  gulp
    .src('css/index.css')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(postcss())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream())
  cb()
}

function js(cb) {
  let b = browserify({
    entries: 'src/index.js',
  }).transform(babelify, { global: true })
  b.bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('public'))
  cb()
}

function asset(cb) {
  gulp.src('assets/*').pipe(gulp.dest('public/assets'))
  cb()
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'public/',
    },
  })
  gulp.watch('css/**/*.*', css)
  gulp.watch('src/**/*.*', js).on('change', browserSync.reload)
  gulp.watch('src/*.html', html).on('change', browserSync.reload)
}

exports.default = series(cleanPublic, parallel(html, css, js, asset), watch)

exports.build = series(cleanPublic, parallel(html, css, js, asset))
