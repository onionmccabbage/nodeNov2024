// ES class
class Snap { // Javascript classes always inherit from Object (prototypical)
    // optionally we may write ONE constructor
    constructor(title, url){
        this.title = title // no public, private, protected (these are available in Typescript)
        this.url   = url
    }
    prettyPrint(){
        return `${this.title} ${this.url}`
    }
}

// instances
const s1 = new Snap('my pic', 'http://nonsuch')
console.log( s1, s1['title'], s1.url )
console.log(s1.prettyPrint())