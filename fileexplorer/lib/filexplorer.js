var path = require('path')
var fs = require('fs')

console.log(process.cwd())
console.log(__dirname)
console.log(__dirname + '../data')
console.log(path.join(__dirname, '../data'))

function listFiles() {
  var list = fs.readdirSync('./data')
  return list
}

function fileDetails(filePath) {
  return fs.statSync(filePath)
}

function getFile(filePath) {
  return fs.readFileSync(filePath, {
    encoding: 'utf8'
  })
}


// module.exports = {}
module.exports.listFiles = listFiles