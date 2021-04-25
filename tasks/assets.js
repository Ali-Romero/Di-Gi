const { src, dest } = require('gulp')

module.exports = function() {
  return src('source/assets/**/*.*')
    .pipe(dest('dest/'))
}
