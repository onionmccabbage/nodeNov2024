// .ts is a typescript file
// to use typescript we need to install it
// npm install -g typescript (globally so its available everywhere)
// that gives us the Typescript Compiler tsc
// tsc will convert our .ts files to .js files
let a = 1 // this is typescript - implicitly a number
// the most important thing to remember: typescript is NEVER executed
// workflow:
// write .ts
// convert to .js // even if this is automated
// execute the .js // sometimes the toolchain will throw away the gewnerated .js

// we use typescript
const username:string = 'Freda' // explicitly a string
a = -88
// a = username // problem we CANNOT assign 'a' to anything exceopt numeric values

// structures - two ways to descalre the type of an array
let m_arr:Array<number> = [3,4,5,6,7] // in Typescipt te members are usually all one type
let n_arr:string[] = ['one', 'two', 'three']

// optional types
let p:number | string // either type is fine
p = 1
p = 'two'