const browserSync = require('browser-sync').create()

const config = {
  server: {
      baseDir: 'dest/'
  },
  notify: false
}

module.exports = function(done) { 
  browserSync.init(config)

  browserSync.watch('dest/').on('change', browserSync.reload)

  done()
}
