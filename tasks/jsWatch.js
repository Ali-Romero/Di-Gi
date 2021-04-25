const { watch } = require('gulp')
const js = require('./js')

module.exports = function(done) {
  watch(['source/js/*.js'], js)

  done()
}
