// ├── util
// |  ├── getData.js
// |  ├── development.js
// |  └── production.js
// ├── index.js
// └── package.json

import {createServer} from 'node:http'
import { fetchPhotos } from "./util/getData.js";

// not yet a complete server solution
// const server = createServer((req, res) => {
// 	// console.log(req.url)
// 	const url_id = req.url
// 	if (url_id == "/") {
// 		res.writeHead(200, { 'Content-Type': "text/plain" })
//         res.write('please provide an id e.g. /42')
// 	} else {
//         const results = async ()=>{
//             await processRequest(url_id)
//         }
//         res.writeHead(200, { 'Content-Type': "text/plain" })
//         res.write(results)
// 	}
// 	res.end()
// })
// console.log('Server running')
// server.listen(3000)

const processRequest = (id)=>{
    const numberOfArgs = process.argv.length
    if (numberOfArgs>2){
        // validate we have numeric values
        for (let i=2; i<numberOfArgs; i++){
            fetchPhotos(process.argv[i]).then( (p)=>{
                console.log(p)
            } )
        }
    }
}
processRequest()