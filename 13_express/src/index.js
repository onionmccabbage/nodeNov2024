import express from 'express' // gets it from the node modules
// we need some middleware
import error from './middlewares/errorhandling.js'

const app = express() // we nopw have a full-fat web server

// use it
app.use(express.json()) // we may need to read JSON from request body

// make some routes
app.get('/', (req, res)=>{ // request, response
    res.send({message:'Welcome to Express'})
})
// challenge - a route that returns a name
app.get('/ethel', (req, res)=>{ // request, response
    res.send({message:'Greetings Ethel'})
})

app.use(error)

// start the server
app.listen(3000, ()=>{
    console.log('Server started http://localhost:3000')
})