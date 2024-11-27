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

myEmitter.emit('greet') // the event it emitted, so the call-back will run
myEmitter.emit('Babbage', 5,3)

