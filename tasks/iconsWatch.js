const { watch } = require('gulp')
const icons = require('./icons')

module.exports = function(done) {
  watch(['source/icons/*.svg'], icons)

  done()
}
