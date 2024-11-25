// NodeJs is JavaScript (ECMAScript)
// in JavaScript EVERYTHING is an Object

console.log('Hello')

// we normally capture code in a function
function oldSkool(x){ // modern ES deliberately reduces the reliance on the 'function' keyword
    return x*x
}

const fn  = (x)=>{return x*x} // x**x is to the power
const fnB = x =>{return x*x} // if there is exactly one argument we can leave out ()
// careful - if you later add the {} you must also remember to add 'return'
const fnC = x => x*x // if there is only one statement, we can leave out {} and return

// what happens when things go wrong
// we may execute like this:
// node --stack-trace-limit=10 01_basics.js
const run = (n)=>{
    if (n==0) {
        throw new Error('We reached Zero, hence this error')
    }
    // otherwise call this function
    run(n-1)
}

console.log( fn(3) )
console.log( oldSkool(3) )
console.log( fnC(9) )
console.log( run(4) )