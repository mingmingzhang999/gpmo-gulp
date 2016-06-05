var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    babel = require('gulp-babel'),
    del = require('del');

// clean will not be run twice, even though it is called as a dependency twice.
// ref url: https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-tasks-in-series.md
gulp.task('default', ['clean', 'copyThirdLib', 'styles', 'scripts']);

gulp.task('clean', function() {
    return del(['build']);
});

// Styles
gulp.task('styles', ['clean'], function() {
  return gulp.src('src/css/*.css')
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts         presets: ['es2015'],
gulp.task('scripts', ['clean'], function() {
  return gulp.src('src/js/lib/*.js')
    .pipe(babel({
         presets: ['es2015'],
         plugins: ["transform-es2015-modules-amd"]
        }))
    .pipe(rename({ suffix: '.min' }))
    //.pipe(uglify())
    .pipe(gulp.dest('build/js/lib'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('copyThirdLib', ['clean'], function() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/js/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('watch', function() {
  // Watch thirdlib .js files
  gulp.watch('src/js/*.js', ['default']);
  // Watch .scss files
  gulp.watch('src/css/*.css', ['default']);
  // Watch .js files
  gulp.watch('src/js/lib/*.js', ['default']);
  // Create LiveReload server
  // livereload.listen();
  // Watch any files in dist/, reload on change
  //gulp.watch(['build/**']).on('change', livereload.changed);
});