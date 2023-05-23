const gulp = require("gulp");
const livereload = require("gulp-livereload");
const browserSync = require("browser-sync").create();

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  livereload.listen();

  gulp.watch(["**/*.*"]).on("change", livereload.changed);
});
