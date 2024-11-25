import {argv} from 'node:process' // nb using ESM

// iterate over all the system argument variables
const fnArgV = ()=>{
    argv.forEach( (val, index)=>{
        console.log(`${index}: ${val}`)
    } )
}

fnArgV()