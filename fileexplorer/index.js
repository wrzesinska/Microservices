var express = require('express')
var filexplorer = require('./lib/filexplorer.js')

var app = express()

// List Files
app.get('/', (req, res) => {
  var files = filexplorer.listFiles()
  res.send(files)
})
// Get file details
// Get file content

var host = 'localhost'
var port = 8080;



// http.createServer(app).listen(80);
app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`)
})