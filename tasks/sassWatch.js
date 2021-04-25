const { watch } = require('gulp')
const sass = require('./sass')

module.exports = function(done) {
  watch(['source/sass/**/*.sass'], sass)

  done()
}
