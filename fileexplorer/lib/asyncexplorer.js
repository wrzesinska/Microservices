var path = require('path')
var fs = require('fs')
var util = require('util')

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

module.exports.fileDetails = function (filePath, callback) {
  // fs.stat(filePath, (err, stat) => {
  //   callback(err, stat)
  // })
  fs.stat(path.join(dataDir, filePath), callback)
}


module.exports.getFile = function (filePath) {
  return fs.promises.readFile(path.join(dataDir, filePath), {
    encoding: 'utf8'
  })
  
  // const readFilePromise = util.promisify(fs.readFile)
  // return readFilePromise(path.join(dataDir, filePath), {
  //   encoding: 'utf8'
  // })

  // return new Promise((resolve, reject) => {
  //   fs.readFile(filePath, {
  //     encoding: 'utf8'
  //   }, (err, data) => {
  //     if (err) { reject(err); return; }
  //     resolve(data)
  //   })
  // })
}


// module.exports = {}
module.exports.listFiles = listFiles