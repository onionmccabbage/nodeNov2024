export const add = (a,b)=>{
    if (typeof a != 'number' || typeof b != 'number'){
        throw new Error('Values need to be numeric')
    }
    return a+b
}
