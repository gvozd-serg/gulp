'use strict';
var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    del = require('del'),
    cache = require('gulp-cache'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin = require('gulp-html-minifier');
//   iconfont = require('gulp-iconfont'),
//   iconfontCss = require('gulp-iconfont-css');

// var fontName = 'Icons';

// gulp.task('icon', function () {
//   gulp.src(['src/icons/*.svg'])
//     .pipe(iconfontCss({
//       fontName: fontName,
//       path: '',
//       targetPath: '../../sass/_icons.scss',
//       fontPath: '../../fonts/icons/'
//     }))
//     .pipe(iconfont({
//       fontName: fontName,
//       prependUnicode: true,
//       formats: ['ttf', 'eot', 'woff', 'svg'],
//       normalize: true,
//       fontHeight: 1001
//     }))
//     .pipe(gulp.dest('src/fonts/icons/'));
// });

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'))
    .pipe(connect.reload());
});

gulp.task('scripts', function () {
  return gulp.src([
    // 'node_modules/jquery/dist/jquery.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('src/js'));
});

gulp.task('connect', function () {
  connect.server({
    root: 'src',
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src('src/*')
    .pipe(connect.reload());
});

gulp.task('css-libs', ['sass'], function () {
  return gulp.src('src/css/libs.css')
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', ['connect', 'css-libs', 'scripts'], function () {
  gulp.watch('src/sass/**/*.sass', ['sass']);
  gulp.watch('src/*.html', ['reload']);
  gulp.watch('src/js/**/*.js', ['reload']);
});

gulp.task('clean', function () {
  return del.sync('build');
});

gulp.task('build', ['clean', 'sass', 'scripts'], function () {

  var buildCss = gulp.src([
    'src/css/all.css',
    'src/css/libs.min.css'
  ])
    .pipe(csso())
    .pipe(gulp.dest('build/css'));

  var buildFonts = gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('build/fonts'));

  var buildImg = gulp.src('src/img/**/*')
    .pipe(gulp.dest('build/img'));

  var buildJs = gulp.src('src/js/**/*')
    .pipe(gulp.dest('build/js'));

  var buildHtml = gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
});

gulp.task('clear', function (callback) {
  return cache.clearAll();
});

gulp.task('default', ['watch']);