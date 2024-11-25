// we can grab bits of Node to use in our own code (Node standard library)
const http = require('http') // this is old-skool commonJS

// some handy config data
const hostName = '127.0.0.1'
const port     = 3000

// we can make our own server like this
const server = http.createServer( (req, res)=>{ // request and response objects
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end('message from microservice') // send anything we like
} )

// we need to start our microserver
server.listen(port, hostName, ()=>{
    // we may use back-tick syntax to inject any pure JS statement
    console.log(`Server running at http://${hostname}:${port}/`)
})