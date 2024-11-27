import {EventEmitter} from 'events'

// we need an instance of the event emmiter
const myEmitter = new EventEmitter()

// listen out for an event
myEmitter.on('greet', ()=>{ // call it anything we like
    console.log('event happened')
})

myEmitter.emit('greet') // the event it emiited, so the call-back will run

