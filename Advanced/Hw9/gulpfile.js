var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//gulp-sass
gulp.task('sass', function () {
  return gulp.src('styles/sass/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('styles/css'));
});

// Задача по умолчанию, вызывается запуском `gulp`
gulp.task('default', ['sass', 'watch']);

//gulp-watch
gulp.task('watch', ['sass'], function () {
  gulp.watch('styles/sass/*.scss', ['sass']);
});
