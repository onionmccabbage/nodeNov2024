import { EventEmitter } from "events";
const seqEmitter = new EventEmitter()

seqEmitter.on('sequential', ()=>{
    console.log('first listener')
})
seqEmitter.on('sequential', ()=>{
    console.log('second listener')
})
seqEmitter.on('sequential', ()=>{
    console.log('third listener')
})

seqEmitter.emit('sequential') // trigger all three listeners, in order