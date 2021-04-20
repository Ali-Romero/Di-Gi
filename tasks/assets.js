const { src, dest, watch } = require('gulp')

function build() {
  return src('source/assets/**/*.*')
    .pipe(dest('dest/'))
}

watch(['source/assets/**/*.*'], build)

module.exports = build
