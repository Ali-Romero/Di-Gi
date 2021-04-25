const { task, series, parallel } = require('gulp')
const clean = require('./tasks/clean')
const logger = require('./tasks/logger')
const server = require('./tasks/server')
const sass = require('./tasks/sass')
const sassWatch = require('./tasks/sassWatch')
const pug = require('./tasks/pug')
const pugWatch = require('./tasks/pugWatch')
const images = require('./tasks/images')
const imagesWatch = require('./tasks/imagesWatch')
const icons = require('./tasks/icons')
const iconsWatch = require('./tasks/iconsWatch')
const assets = require('./tasks/assets')
const assetsWatch = require('./tasks/assetsWatch')
const js = require('./tasks/js')
const jsWatch = require('./tasks/jsWatch')

task('clean', clean)
task('logger', logger)
task('server', server)
task('sass', sass)
task('sass:watch', sassWatch)
task('pug', pug)
task('pug:watch', pugWatch)
task('images', images)
task('images:watch', imagesWatch)
task('icons', icons)
task('icons:watch', iconsWatch)
task('assets', assets)
task('assets:watch', assetsWatch)
task('js', js)
task('js:watch', jsWatch)

function dev() {
  return series(
    'clean',
    parallel('sass', 'pug', 'images', 'icons', 'assets', 'js'),
    parallel('sass:watch', 'pug:watch', 'images:watch', 'icons:watch', 'assets:watch', 'js:watch'),
    'logger',
    'server',
  )
}

function prod() {
  return series(
    'clean',
    parallel('sass', 'pug', 'images', 'icons', 'assets', 'js'),
  )
}

exports.default = process.env.NODE_ENV === 'development' ? dev() : prod()
