const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.PORT || 8080

var i = 0;

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  if (req.url.includes('args')) {
    res.setHeader('Content-Type', 'text/json')
    res.end(JSON.stringify(process.argv, 0, 2))

  } else if (req.url.includes('counter')) {
    res.end(String(i++))

  } else if (req.url.includes('calculate')) {
    /* DONT DO THIS - DONT BLOCK CPU */
    console.log('sleep for 5sec')
    now = Date.now()
    while (now + 5000 > Date.now()) {/* CPU intensive task */ }
    res.end(String('done!'))

  } else if (req.url.includes('bigfile')) {
    // var bigfile = Buffer.alloc(2048)
    // var bufferview = bigfile.slice(5,10)
    // bigfile[6] = 'x'
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    var max = 10e5;

    // for(let i = 0; i < max; i++){
    // const handler = setInterval(() => {
    function nextStep() {

      if (i++ < max) {
        let chunk = 'Ala ma kota, ' + i + '<br/> \r\n ';
        res.write(chunk)
        nextStep(handler)
      } else {
        // clearInterval(handler)
        res.end()
      }
    }
    nextStep()
    // }, 100)
    // }

  } else {
    res.end('Hello World!\n')
  }

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})