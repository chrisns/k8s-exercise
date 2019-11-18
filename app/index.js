const http = require('http')

const hostname = '0.0.0.0'
const port = 3000

var started = false
var ready = false

setTimeout(() => {
  started = true
  console.log("started up")
}, 10 * 1000)

setTimeout(() => {
  ready = true
  console.log("ready")
}, 15 * 1000)

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')

  if (!started) {
    console.error("called before startup crashing")
    process.exit()
  }
  else if (req.url == "/health") {
    res.end('OK\n')
  }
  else if (!ready) {
    console.error("failed to serve a request")
    res.statusCode = 500
    res.end('NOT READY\n')
  }
  else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
  }
})

if (Math.ceil(Math.random() * 3) !== 3) {
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })
}


setTimeout(() => {
  server.close()
  console.log("server crashed")
}, 2 * 60 * 1000)


setInterval(() => console.log("-- MARK --"), 60 * 1000)
