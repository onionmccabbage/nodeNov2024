import { EventEmitter } from "events";
// we might have event emitters in other files
// remember - once other files have been imported their code behaves as if they 
// were already in this file

const seqEmitter = new EventEmitter()

seqEmitter.on('sequential', ()=>{
    console.log('first listener')
})

const fnTwo = ()=>{
    console.log('second listener')
}
seqEmitter.on('sequential', fnTwo)

seqEmitter.on('sequential', ()=>{
    console.log('third listener')
})

// we may choose to remove event listeners
seqEmitter.removeListener('sequential', fnTwo) // the signature EXACTLY matches the .on

seqEmitter.emit('sequential') // trigger all three listeners, in order