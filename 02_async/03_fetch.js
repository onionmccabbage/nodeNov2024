fetch('https://api.github.com/users/onionmccabbage').then( (response)=>{
    return response.json()
} ).then( (j)=>{
    console.log(j)
} )

