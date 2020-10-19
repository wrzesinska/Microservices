var path = require('path')
var fs = require('fs')

// console.log(process.cwd())
// console.log(__dirname)
// console.log(__dirname + '../data')
// console.log(path.join(__dirname, '../data'))
const dataDir = (path.join(__dirname, '../data'))

function listFiles(dir = '', filter = '') {
  console.log(dir)
  var workDir = path.join(dataDir, dir)
  var list = fs.readdirSync(workDir)
  return list
    .filter(f => f.includes(filter))
    .map(f => path.join(workDir, f))
}

module.exports.fileDetails = function (filePath) {
  return fs.statSync(filePath)
}


module.exports.getFile = function (filePath) {
  return fs.readFileSync(filePath, {
    encoding: 'utf8'
  })
}


// module.exports = {}
module.exports.listFiles = listFiles