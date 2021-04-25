const { src, dest } = require('gulp')
const pug = require('gulp-pug')

const config = {
  pretty: process.env.NODE_ENV === 'development',
  data: {
    development: process.env.NODE_ENV === 'development',
    production: process.env.NODE_ENV === 'production',
  }
}

module.exports = function() {
  return src('source/pages/*.pug')
    .pipe(pug(config))
    .pipe(dest('dest/'))
}
