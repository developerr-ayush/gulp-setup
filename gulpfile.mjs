import pkg from 'gulp';
const { src, dest, watch, series } = pkg;
import * as dartSass from 'sass';
import gulpsass from 'gulp-sass';
const sass = gulpsass(dartSass)
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import terser from 'gulp-terser';
import { create as createBrowserSync } from 'browser-sync';
import mqpacker from "@hail2u/css-mqpacker";
import webp from 'gulp-sharp-optimize-images'
import clean from 'gulp-clean'

const browserSync = createBrowserSync();

// Sass Task
function scssTask() {
    return src('src/scss/**/*.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([cssnano(), mqpacker()]))
        .pipe(dest('public/css', { sourcemaps: 'map/' }));
}

// JavaScript Task
function jsTask() {
    return src('src/js/**/*.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('public/js', { sourcemaps: 'map/' }));
}

function imgTask() {
    return src('images/**/*')
        .pipe(webp({
            webp: {
                quality: 80,
                lossless: false,
            },
        }))
        .pipe(dest('src/img'));
}
function cleanFiles() {
    return src(['public/', 'src/img'], { "allowEmpty": true })
        .pipe(clean())
}
function copyImages() {
    return src('src/img/**/*.{webp,svg}')
        .pipe(dest('public/img'))
}

function fontTask() {
    return src('src/fonts/*')
        .pipe(dest('public/fonts'));
}

function htmlTask() {
    return src('src/*.html')
        .pipe(dest('public/'));
}

function browsersyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: 'public'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browserSync.reload();
    cb();
}

// Default Gulp Task
export default series(
    cleanFiles,
    htmlTask,
    scssTask,
    jsTask,
    fontTask,
    imgTask,
    copyImages,
    browsersyncServe,
    watchTask
);

export const build = series(
    cleanFiles,
    htmlTask,
    scssTask,
    jsTask,
    fontTask,
    imgTask,
    copyImages
);

// Watch Task
function watchTask() {
    watch(['src/*.html', 'src/**/*.scss', 'src/**/*.js'], series(htmlTask, scssTask, jsTask, browsersyncReload));
}
