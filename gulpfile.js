const { task, series } = require('gulp')
const sass = require('./tasks/sass')
const pug = require('./tasks/pug')
const server = require('./tasks/server')
const clean = require('./tasks/clean')
const logger = require('./tasks/logger')

task('clean', clean)
task('sass', sass)
task('pug', pug)
task('server', server)

logger()

exports.default = series('clean', 'sass', 'pug', 'server')
