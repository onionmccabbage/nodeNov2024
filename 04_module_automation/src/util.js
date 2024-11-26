export const greet = (name)=>{
    return `Hello ${name}`
}

export const goodbye = (name)=>{
    return `Goodbye ${name}`
}

// explore JavaScript Object Notation (and JavaScript Objects)
const obj = {'n':'Ethel', 'a':42, 'admin':false} // this is a JavaScript Object
const obj_j = JSON.stringify(obj)
// JSON is NOT JavaScript, it is simple text
console.log(obj, obj_j)
const recovered = JSON.parse(obj_j) // convert the txt back to a structure
console.log(recovered)
