const { watch } = require('gulp')
const pug = require('./pug')

module.exports = function(done) {
  watch([
    'source/pages/*.pug',
    'source/layouts/*.pug',
    'source/components/**/*.pug'
  ], pug)

  done()
}
