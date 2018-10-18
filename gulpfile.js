var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server', function() {
  browserSync.init({
    proxy: {
      target: 'localhost:3000',
      reqHeaders: function () {
        return { host: 'localhost:8000' };
      }
    },
    port: 8000,
    open: true,
    notify: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    }
  });

  gulp.watch(paths.html).on('change', reload);
  gulp.watch(paths.styles, gulp.series('clean', 'styles'));
  gulp.watch(paths.scripts, gulp.series('scripts'));
});
