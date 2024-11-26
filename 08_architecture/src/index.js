// ├── util
// |  ├── getData.js
// |  ├── development.js
// |  └── production.js
// ├── index.js
// └── package.json
import { fetchPhotos } from "./util/getData.js";
fetchPhotos().then( (p)=>{
    console.log(p)
} )
