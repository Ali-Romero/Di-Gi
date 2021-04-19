const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')

function build() {
  return src('source/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dest/css'))
}

watch(['source/sass/**/*.sass'], build)

module.exports = build
