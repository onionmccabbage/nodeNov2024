// by default fetch uses 'GET'
// fetch('https://api.github.com/users/onionmccabbage').then( (response)=>{
//     return response.json()
// } ).then( (j)=>{
//     console.log(j)
// } )

// handle 'fetch' with async-await
const getJson = async (url)=>{
    try {
        // we may wait for the fetch to return a promise
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(response.status)
        }
        const data = await response.json()
        return data
    }
    catch(err){
        console.log(err)
    }
    finally{
        // always runs
    }
}
const main = async ()=>{
    const myUrl = 'https://api.github.com/users'
    // const myUrl = 'http://jsonplaceholder.typicode.com/photos'
    const githubData = await getJson(myUrl)
    console.log(githubData)
}

main()