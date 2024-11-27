// ECMAScript aka Javascript or ES

// back-tick syntax
const str = 'Lunch'
// the most efficient string builder is ``
const result_str = `Is it ${str} at ${3+2}`

console.log(result_str)

// var, let, const
var a = 1 // still works
let b = 2 // modern syntax
const c = 'immutable'

const n = ()=>{}


function A(){
    return a
    let a = 1 // NOT hoisted - a does NOT exist when the return is called
}

function B(){
    return a
    var a = 1 // hoisted - treats as if a is defined already
}

// console.log( B() )
// console.log( A() )