const { watch } = require('gulp')
const images = require('./images')

module.exports = function(done) {
  watch(['source/images/**/*.*'], images)

  done()
}
