const { src, dest } = require('gulp')
const iconfont = require('gulp-iconfont')
const iconfontCss = require('gulp-iconfont-css')
const gulpif = require('gulp-if')
const rename = require('gulp-rename')
const cssmin = require('gulp-cssmin')
const filter = require('gulp-filter')

const fontName = 'icons';

const configCss = {
  fontName: fontName,
  targetPath: '/icons.css',
  fontPath: ''
}

const configFont = {
  fontName: fontName
}

const production = process.env.NODE_ENV === 'production'

module.exports = function () {
  const f = filter(['*.css'], { restore: true })

  return src(['source/icons/*.svg'])
    .pipe(iconfontCss(configCss))
    .pipe(f)
    .pipe(gulpif(production, cssmin()))
    .pipe(gulpif(production, rename({ suffix: '.min' })))
    .pipe(f.restore)
    .pipe(iconfont(configFont))
    .pipe(dest('dest/icons/'))
}
