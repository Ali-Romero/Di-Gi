const { watch } = require('gulp')
const assets = require('./assets')

module.exports = function(done) {
  watch(['source/assets/**/*.*'], assets)

  done()
}
