"use strict";
// Импорт пакетов
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const remane = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const del = require('del')


// Пути исходных файлов src и пути к результирующим файлам dest
const paths = {
  style: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css',
  },
  scripts: {
    src: 'src/js/**/*js',
    dest: 'dist/js',
  },

}

// Очистить каталог dist, удалить все кроме изображений
function clean() {
  return del(['dist'])
}

// Обработка препроцессоров стилей
function styles() {
  return gulp.src(paths.style.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(remane({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.style.dest))
}

//Обработка JS
function scripts() {
  return gulp.src(paths.scripts.src, {
    sourcemaps: true
  })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest))
}

// Отслеживание изменений в файлах и запуск лайв сервера
function watch() {
  gulp.watch(paths.style.src, styles)
  gulp.watch(paths.scripts.src, scripts)
}

const build = gulp.series(clean, gulp.parallel(styles, scripts), watch)


exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.watch = watch
exports.build = build
exports.default = build