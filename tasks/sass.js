const { src, dest } = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')

const config = {
  includePaths: ['node_modules']
}

module.exports = function() {
  return src('source/sass/*.sass')
    .pipe(sass(config).on('error', sass.logError))
    .pipe(dest('dest/css'))
}
