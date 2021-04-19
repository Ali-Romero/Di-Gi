const { src, dest, watch } = require('gulp')
const pug = require('gulp-pug')

const config = {
  pretty: true,
}

function build() {
  return src('source/pages/*.pug')
    .pipe(pug(config))
    .pipe(dest('dest/'))
}

watch([
  'source/pages/*.pug',
  'source/layouts/*.pug',
  'source/components/**/*.pug'
], build)

module.exports = build
