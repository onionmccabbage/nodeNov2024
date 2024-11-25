// import {promises} from 'node:fs/promises'
import { readFile } from "node:fs/promises"

// a Promise is an asynchronous object similar to an event
// we may choose to resolve or reject a Promise

// we can use our FS to read in JSON
// const userData = fs.readFile("user.json", "utf8").then(userString => {
// 	const userData = JSON.parse(userString)
// 	return userData
// })

// import * as userData from './user.json'
// import * as regionsData from './regions.json'
// import * as newsData from './news.json'
const userData = readFile("user.json", "utf8").then(userString => {
    const userData = JSON.parse(userString)
    return userData
})

const regionsData = readFile("regions.json", "utf8").then(regionsString => {
    const regionsData = JSON.parse(regionsString)
    return regionsData
})

const newsData = readFile("news.json", "utf8").then(newsString => {
    const newsData = JSON.parse(newsString)
    return newsData
})
// make a Promise derived from multiple streams of data (an array)
Promise.all([userData, regionsData, newsData]).then(([userData, regionsData, newsData]) => { // Promises are thenable
    newsData.forEach((news) => {
        console.log(news.headline)
        console.log(news.content)
        console.log('\n')

    })
}).catch((error) => {
    console.log(error)
})

Promise.allSettled([userData, regionsData, newsData]).then((data) => {
    console.log(data.every((data) => {return data.status === 'fulfilled'}))
    data.forEach(result => {
        if (result.status === "fulfilled") {
            console.log(result.value)
        } else {
            console.log(result.reason)
        }
    })
}).catch((error) => {
    console.log(error)
})


