var express = require('express')
var filexplorer = require('./lib/asyncexplorer.js')

var app = express()

// List Files
app.get('/dir/:dirPath(*)', (req, res) => {
  // console.log(req.query) // ?q=123 => { q: '123' }
  console.log(req.params.dirPath)
  var files = filexplorer.listFiles(req.params.dirPath, req.query.filter)
  res.send(files)
})

// Get file details
app.get('/stats/:fileName(*)', (req, res) => {
  filexplorer.fileDetails(req.params.fileName, (err, stat) => {
    if (err) {
      return res.status(500).send('Error!')
    }
    res.send(stat)
  })
})

// Get file content
app.get('/file', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  var statPromise = filexplorer.getFile('./data/products.json')

  statPromise.then(stat => {
    res.send(stat)
  }).catch(err=>{
    return res.status(500).send('Error!')
  })
})


app.get('/catalogue',(req,res)=>{
  

  // Read all descriptions from products

  // Combine in one Catalogue file

  // Send as response
})


var host = 'localhost'
var port = 8080;

// http.createServer(app).listen(80);
app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`)
})

process.on('SIGINT', () => {
  console.log('Recieved SIGINT - exiting')
})