import {argv} from 'node:process' // nb using ESM
// very useful to inject parameters to our node module

// iterate over all the system argument variables
const fnArgV = ()=>{
    argv.forEach( (val, index)=>{
        console.log(`${index}: ${val}`)
    } )
}

fnArgV()