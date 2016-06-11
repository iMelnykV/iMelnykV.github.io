var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    sourcemaps  = require('gulp-sourcemaps');
    svgSprite   = require('gulp-svg-sprite');
    svgo        = require('gulp-svgo'),
    raster      = require('gulp-raster'),
    rename      = require('gulp-rename'),
    postcss     = require('gulp-postcss'),
    unwrapAtMedia = require('postcss-unwrap-at-media');


// svg-sprite config
config = {
  shape: {
    dimension: {         // Set maximum dimensions
      maxWidth: 60,
      maxHeight: 60
    },
    spacing: {         // Add padding
      padding: 10
    },
    dest: 'out/intermediate-svg'    // Keep the intermediate files
  },
  mode: {
    view: {         // Activate the «view» mode
      bust: false,
      render: {
        scss: true      // Activate Sass output (with default options)
      }
    },
  }
};

gulp.task('svgsprite', function() {
  return gulp.src('img/src-svg/*.svg')
  .pipe(svgo())
  .pipe(svgSprite(config))
  .pipe(gulp.dest('img/svg'));
});

gulp.task('svgo', function() {
  return gulp.src('img/*.svg')
  .pipe(svgo())
  .pipe(gulp.dest('img'));
});

gulp.task('raster', function() {
  return gulp.src('img/*.svg')
  .pipe(raster())
  .pipe(rename({extname: '.png'}))
  .pipe(gulp.dest('img/png/'));
});

gulp.task('svg2png', function () {
  gulp.src('img/*.svg')
  .pipe(svg2png())
  .pipe(gulp.dest('img/png'));
});

gulp.task('sass', function() {
  return gulp.src('css/scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('ie', function() {
  return gulp.src('css/style.css')
  .pipe(postcss([ unwrapAtMedia ]))
  .pipe(rename({ suffix: '.ie8' }))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

// Задача по умолчанию, вызывается запуском `gulp`
gulp.task('default', ['browserSync', 'sass', 'watch']);

// Отслеживаем файлы, и по их изменению, запускаем задачу
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('css/scss/**/*.scss', ['sass']);
  gulp.watch('**/*.html', browserSync.reload);
  gulp.watch('**/*.js', browserSync.reload);
});
