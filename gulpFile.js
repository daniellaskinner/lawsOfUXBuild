var gulp = require('gulp')
var sass = require('gulp-sass')

function sassCompile(cb) {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'));
    cb();
}

function watch() {
gulp.watch('app/scss/**/*.scss', sassCompile); //add a watcher for the sass compiling that calls sass cmpile as a cb
}

exports.sass = sassCompile; //run gulp sass in c-line
exports.watch = watch; //run gulp watch in c-line