// typescript interface
interface Photo {
    //some properties
    albumId:number
    id:number
    title:string
    url:string
    thumbnailUrl:string
    // some methods
    // any property or method may be optional  using '?'
    prettyPrint?: ()=>{} // no implementation
}

class Snap implements Photo{ // Javascript classes always inherit from Object (prototypical)
    albumId:number
    id:number
    title!:string // ! means we guarantee it will be not-null
    url:string
    thumbnailUrl:string
    // optionally we may write ONE constructor
    constructor(snap:Photo){
        this.title = snap.title
        this.url   = snap.url
    }
    prettyPrint(){
        return `${this.title} ${this.url}`
    }
}

// instances
const s2:Photo = new Snap( // no need to data-type, it is implicit
    {'id'          :346, 
     'albumId'     :3, 
     'title'       :'cat', 
     'thumbnailUrl':'http://nonsuch.ie', 
     'url'         :'bbc.co.uk/nope'})
console.log( s2, s2['title'], s2.url )
// console.log(s2.prettyPrint())