
{ // {} let us make a new scope - independent of other scopes
    // desctructuring an array
    const values = [42, 47, 32, -65, 33, 453435, -1] // an ordinal collection of mutable values
    const [a, b, c, ...rest] = values // we populate a and b from members zero and 1 of the array
    console.log(a, b, c, rest) // all the rest of them are gathered into 'rest'
}
{// we are now in a different scope
    // desctructuring an object
    const values = {name:'Play School', presenter:'Floella', started:1976, end:1984} // an object
    const {name:n, presenter:p, ...rest} = values
    // we may use [] or 'dot' notation to access members of an object
    console.log(`${n} presented by ${p} between ${rest['started']} and ${rest.end}`)
}