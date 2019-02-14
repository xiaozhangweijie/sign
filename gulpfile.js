var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("minSass", function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
})
gulp.task("watch", function() {
    gulp.watch("./scss/*.scss", gulp.series("minSass"));
})