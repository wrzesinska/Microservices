
function listFiles() {
  privateFunction()
  return ['fakefile.txt']
}

function privateFunction(){

}

// module.exports = {}
module.exports.listFiles = listFiles