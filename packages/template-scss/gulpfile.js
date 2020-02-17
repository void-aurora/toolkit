/* eslint-disable @typescript-eslint/unbound-method */
const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('sass');

gulp.task('default', () => {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
