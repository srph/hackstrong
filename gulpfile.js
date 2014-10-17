/** Asset directories */
var paths = {};
paths.css = './assets/css/';
paths.less = './assets/less/';

/** Dependencies */
var gulp                = require('gulp'),
    less                = require('gulp-less'),
    rename              = require('gulp-rename');

gulp.task('less', function () {
    var file = 'stylesheet.css';

    return gulp.src(paths.less + 'hack.less')
        .pipe(less())
        .pipe(rename(file))
        .pipe(gulp.dest(paths.css));
});

gulp.task('default', function () {
    gulp.run('less');
    gulp.watch(paths.less + '**/*.less', ['less']);
});