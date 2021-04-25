const { src, dest } = require('gulp')
const image = require('gulp-image');

const config = {}

module.exports = function() {
  return src('source/images/**/*.*')
    .pipe(image(config))
    .pipe(dest('dest/images'))
}
