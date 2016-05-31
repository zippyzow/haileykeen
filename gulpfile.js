// grab our gulp packages
var gulp  = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css');

var jsComponents = 'components/**/*.js',
    jsShared = 'shared/**/*.js',
    jsAll = [jsComponents, jsShared];

var scssComponents = 'components/**/*.scss',
    scssShared = 'shared/**/*.scss',
    scssAll = [scssComponents, scssShared];

var bin = 'bin';


gulp.task('default', ['jshint', 'concat-js', 'build-and-concat-css', 'watch']);

gulp.task('concat-js', function() {
  return gulp.src(jsAll)
      .pipe(concat('concated.js'))
      .pipe(gulp.dest(bin));
});

gulp.task('jshint', function() {
  return gulp.src(jsAll)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-components-css', function() {
  return gulp.src(scssComponents)
      .pipe(sass())
      .pipe(gulp.dest('intermediate/stylesheets/components'));
});

gulp.task('build-shared-css', function() {
  return gulp.src(scssShared)
      .pipe(sass())
      .pipe(gulp.dest('intermediate/stylesheets/shared'));
});

gulp.task('build-and-concat-css', ['build-components-css', 'build-shared-css'], function() {
  return gulp.src('intermediate/**/*.css')
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(bin));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(jsAll, ['jshint', 'concat-js']);
  gulp.watch(scssAll, ['build-and-concat-css']);
});

