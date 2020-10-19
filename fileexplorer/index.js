var express = require('express')
var filexplorer = require('./lib/filexplorer.js')

var app = express()

app.get('/', (req, res) => {
  var files = filexplorer.listFiles()
  res.send(files)
  
  // res.write(
  //   JSON.stringify(filexplorer.listFiles(), 0, 2)
  // )
  // setTimeout(()=>res.end(), 2000)
})

var host = 'localhost'
var port = 8080;



// http.createServer(app).listen(80);
app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`)
})