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
    // act acording to the path
    if (req.url == '/'){ // the home route
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h3>Home Page</h3>')
    }
    else if (req.url == '/about'){ // the about route
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h3>About this website...</h3>')
    }    
    else { // all other routes
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h3>404 Not Found</h3>')
    }
    res.end('message from microservice') // send anything we like
} )

// we need to start our microserver
server.listen(port, hostName, ()=>{
    // we may use back-tick syntax to inject any pure JS statement
    console.log(`Server running at http://${hostName}:${port}/`)
})

// use a browser to visit 127.0.0.1:3000

// here is a simple way to make this file into anESM module
// export default {} // quick and dirty, not recomended
// nb we absolutely SHOULD do like this....
// export default server 