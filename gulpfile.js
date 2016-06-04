// grab our gulp packages
var gulp  = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    angularTemplates = require('gulp-angular-templates');

var jsComponents = 'components/**/*.js',
    jsShared = 'shared/**/*.js',
    jsSrc = [jsComponents, jsShared],
    jsVendor = './node_modules/angular-ui-router/release/angular-ui-router.min.js',
    jsAll = ['components/**/*.js', 'shared/**/*.js', jsVendor];

var scssComponents = 'components/**/*.scss',
    scssShared = 'shared/**/*.scss',
    scssSrc = [scssComponents, scssShared];

var htmlSrc = 'components/**/*.html';

var buildPath = 'public/build';


gulp.task('default', ['jshint', 'concat-js', 'build-and-concat-css', 'watch', 'build-html']);

gulp.task('concat-js', function() {
  return gulp.src(jsAll)
      .pipe(concat('concated.js'))
      .pipe(gulp.dest(buildPath));
});

gulp.task('jshint', function() {
  return gulp.src(jsSrc)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-html', function () {
  return gulp.src(htmlSrc)
      .pipe(angularTemplates())
      .pipe(gulp.dest(buildPath));
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
      .pipe(gulp.dest(buildPath));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(jsSrc, ['jshint', 'concat-js']);
  gulp.watch(htmlSrc, ['build-html']);
  gulp.watch(scssSrc, ['build-and-concat-css']);
});

