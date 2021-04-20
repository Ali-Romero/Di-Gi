const { src, dest, watch } = require('gulp')
const include = require('gulp-include')
const path = require('path')

const config = {
  includePaths: [
    path.dirname(path.basename(__dirname)) + '/node_modules',
    path.dirname(path.basename(__dirname)) + '/source/js'
  ]
}

function build() {
  return src('source/js/*.js')
    .pipe(include(config))
    .pipe(dest('dest/js'))
}

watch(['source/js/*.js'], build)

module.exports = build
