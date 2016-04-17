var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var babel = require("gulp-babel");

gulp.task('styles', function() {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({compatibility: 'ie9'}))
    .pipe(gulp.dest('./css/'))
});

gulp.task('build', function() {
  return gulp.src('src/**/*.js')
  .pipe(babel())
  .pipe(gulp.dest('build'));
});

// Watch task
gulp.task('default',function() {
  // run task initially, after that watch
  gulp.start('styles');
  gulp.start('build');
  gulp.watch('./scss/*.scss',['styles']);
  gulp.watch('src/**/*.js',['build']);
});