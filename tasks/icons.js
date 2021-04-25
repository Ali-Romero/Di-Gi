const { src, dest } = require('gulp')
const iconfont = require('gulp-iconfont')
const iconfontCss = require('gulp-iconfont-css')

const fontName = 'icons';

const configCss = {
  fontName: fontName,
  targetPath: '/icons.css',
  fontPath: '/icons/'
}

const configFont = {
  fontName: fontName
}

module.exports = function() {
  return src(['source/icons/*.svg'])
    .pipe(iconfontCss(configCss))
    .pipe(iconfont(configFont))
    .pipe(dest('dest/icons/'))
}
