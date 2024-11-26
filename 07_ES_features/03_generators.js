// efficient way to provide large quantities of sequential data
// e.g. Fibonacci sequence 1, 2, 3, 5, 8, 13, 21, 34, 55...
function* fib(){ // we MUST use function* not ()=>{}
    let first=1, second =2 // declare more than one variable
    for (let i=0; i<10; i++){
        let sum = first+second
        yield [first, second, sum] // yield instead of return
        first = second
        second = sum
    }
}
// exercise the code
const g = fib() // we now have an instance of our generator
console.log( g.next() ) // 3
console.log( g.next() ) // 5
console.log( g.next() ) // 8
// we can pick out members
console.log( g.next().value[2] ) // 13
