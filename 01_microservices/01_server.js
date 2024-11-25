// we can grab bits of Node to use in our own code (Node standard library)
const http = require('http') // this is old-skool commonJS

// some handy config data
const hostName = '127.0.0.1'
const port     = 3000

// we can make our own server like this
const server = http.createServer( (req, res)=>{ // request and response objects
    // explore sending html
    // explore routing (conditional responses)
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html") // or /json /plain /xml etc.
    res.write('<h3>Welcome to NodeJS</h3>')
    res.write('<p>using Node microserver</p>')
    res.end('message from microservice') // send anything we like
} )

// we need to start our microserver
server.listen(port, hostName, ()=>{
    // we may use back-tick syntax to inject any pure JS statement
    console.log(`Server running at http://${hostName}:${port}/`)
})

// use a browser to visit 127.0.0.1:3000