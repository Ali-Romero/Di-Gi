const { task, series } = require('gulp')
const sass = require('./tasks/sass')
const pug = require('./tasks/pug')
const server = require('./tasks/server')
const clean = require('./tasks/clean')
const assets = require('./tasks/assets')
const logger = require('./tasks/logger')

task('clean', clean)
task('sass', sass)
task('pug', pug)
task('assets', assets)
task('server', server)

logger()

exports.default = series('clean', 'sass', 'pug', 'assets', 'server')
