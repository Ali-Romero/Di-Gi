const { watch } = require('gulp')

module.exports = function (done) {
  const watcher = watch(['source/**/*.*'])

  watcher.on('change', function(path, stats) {
    console.log(`Файл ${path} был изменён`)
  })

  watcher.on('add', function(path, stats) {
    console.log(`Файл ${path} был добавлен`)
  })

  watcher.on('unlink', function(path, stats) {
    console.log(`Файл ${path} был удалён`)
  })

  done()
}
