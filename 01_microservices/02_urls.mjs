// we can grab bits of Node to use in our own code (Node standard library)
import { createServer } from 'http' // this is ESM - an ES Module

// some handy config data
const hostName = '127.0.0.1'
const port     = 3000

// we can make our own server like this
const server = createServer( (req, res)=>{ // request and response objects
    // explore sending html
    // explore routing (conditional responses)
    console.log( req.url ) // url is the path

    res.end('message from microservice') // send anything we like
} )

// we need to start our microserver
server.listen(port, hostName, ()=>{
    // we may use back-tick syntax to inject any pure JS statement
    console.log(`Server running at http://${hostName}:${port}/`)
})

// use a browser to visit 127.0.0.1:3000