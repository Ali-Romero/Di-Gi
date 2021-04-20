const { src, dest, watch } = require('gulp')
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

function build() {
  return src(['source/icons/*.svg'])
    .pipe(iconfontCss(configCss))
    .pipe(iconfont(configFont))
    .pipe(dest('dest/icons/'))
}

watch(['source/icons/*.svg'], build)

module.exports = build
