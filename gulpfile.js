const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('sass', () => gulp.src('sass/main.sass')
  .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({ stream: true })));

gulp.task('browser-sync', () => {
  browserSync({
    server: { baseDir: './' },
    notify: false,
  });
});

gulp.task('watch', ['browser-sync', 'sass'], () => {
  gulp.watch('sass/**/*.sass', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/*.js', browserSync.reload);
  // gulp.watch('css/*.css', browserSync.reload);
});
