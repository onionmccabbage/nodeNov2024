import express from 'express' // gets it from the node modules

const app = express() // we nopw have a full-fat web server

// use it
app.use(express.json()) // we may need to read JSON from request body

// make some routes
app.use()