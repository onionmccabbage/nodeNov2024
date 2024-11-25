const fs = require('fs') // commonJS ...or 'node:fs'

fs.readFile('example.txt', 'utf8', (error, data)=>{
    if(error){
        console.log(error)
        return
    }
    console.log(data)
} )

// append to a file
fs.appendFile('example.txt', '\nAdded new content', ()=>{
    console.log('all done')
})