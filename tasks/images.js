const { src, dest, watch } = require('gulp')
const image = require('gulp-image');

const config = {}

function build() {
  return src('source/images/**/*.*')
    .pipe(image(config))
    .pipe(dest('dest/images'))
}

watch(['source/images/**/*.*'], build)

module.exports = build
