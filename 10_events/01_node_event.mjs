import {EventEmitter} from 'events'
// we need the ./ for this import
import {add, subtract, multiply} from './util.mjs'

// we need an instance of the event emmiter
const myEmitter = new EventEmitter()

// listen out for an event
myEmitter.on('greet', ()=>{ // call it anything we like
    console.log('event happened')
})
myEmitter.on('Babbage', (x,y)=>{
    console.log(`Addition Result is ${add(x,y)}`)
})
// implement an event listener for multiply
myEmitter.on('Product', (arr)=>{
    console.log(`Multiply Result is ${multiply(arr[0],arr[1])}`)
})

myEmitter.emit('greet') // the event it emitted, so the call-back will run
myEmitter.emit('Babbage', 5,3) 
// emit the multiply event
myEmitter.emit('Product', [5,3]) // often we pass in a data structure
