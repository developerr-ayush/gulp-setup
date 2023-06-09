const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask() {
    return src('src/scss/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('public/css', { sourcemaps: '.' }));
}
// JavaScript Task
function jsTask() {
    return src('src/js/script.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('public/js', { sourcemaps: '.' }));
}
function imgTask() {
    return src('src/images/*')
        .pipe(dest('public/images'));
}
function fontTask() {
    return src('src/fonts/*')
        .pipe(dest('public/fonts'));
}

function htmlTask() {
    return src('src/*.html')
        // .pipe(
        //     fileinclude({
        //         prefix: "@@",
        //         basepath: "@file",
        //     })
        // )
        .pipe(dest('public/'));
}
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: 'public'
        }
    });
    cb();
}
function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}
// Default Gulp Task
exports.default = series(
    htmlTask,
    scssTask,
    jsTask,
    fontTask,
    imgTask,
    browsersyncServe,
    watchTask
);
// Watch Task
function watchTask() {
    watch(['src/*.html', 'src/**/*.scss', 'src/**/*.js'], series(htmlTask, scssTask, jsTask, browsersyncReload));
}