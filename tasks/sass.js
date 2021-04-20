const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')

const config = {
  includePaths: ['node_modules']
}

function build() {
  return src('source/sass/*.sass')
    .pipe(sass(config).on('error', sass.logError))
    .pipe(dest('dest/css'))
}

watch(['source/sass/**/*.sass'], build)

module.exports = build
