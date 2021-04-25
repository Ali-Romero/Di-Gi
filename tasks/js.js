const { src, dest } = require('gulp')
const gulpif = require('gulp-if')
const include = require('gulp-include')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const path = require('path')

const config = {
  includePaths: [
    path.dirname(path.basename(__dirname)) + '/node_modules',
    path.dirname(path.basename(__dirname)) + '/source/js'
  ]
}

const production = process.env.NODE_ENV === 'production'

module.exports = function() {
  return src('source/js/*.js')
    .pipe(include(config))
    .pipe(gulpif(production, uglify()))
    .pipe(gulpif(production, rename({ suffix: '.min' })))
    .pipe(dest('dest/js'))
}
