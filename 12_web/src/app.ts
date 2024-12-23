import {p} from './users/priscilla' // no extension
p() // invoke the imported function
console.log('app is working')


// using observables
import {fromEvent, map, tap, debounceTime} from 'rxjs'

// here are some suggested prompts
const testData:string[] = [ // probably dynamically generated options
    'people',
    'planets',
    'priscilla',
    'species',
    'vehicles',
    'starships',
    'scotland'
]

// check for a match
//               testData      whatever the user typed
const suggest = (arr:string[], query:string):string[]=>{
    return arr.filter( (item)=>{
        return query.length>0 && item.startsWith(query)
    } )
}

// a cleanup utility
const cleanUpUtil = (container:HTMLElement)=>{
    container.innerHTML = ''
}

// here is the function for append any search suggestions into the web page
const appendResults = (container:HTMLElement, results:string[] | string)=>{
    for (const result of results) {
        // we need a fresh <li> for each suggestion
        const li = document.createElement('li')
        const innerText = document.createTextNode(result)
        li.appendChild(innerText)
        container.appendChild(li)
    }
}
// we need to grab some bits of the DOM
const searchBox:HTMLElement    = document.querySelector('#search') as HTMLElement // or .getElementById('search)
const results:HTMLUListElement = document.querySelector('#results') as HTMLUListElement

// we can make an observable (a subject)
// by convention use a trailing $ to indicate a data-stream (an observable)
const keyStream$ = fromEvent(searchBox, 'keyup').pipe( // much like .then
    // we now have a subject/observable
    debounceTime(500), // wait until the user stops typing for 500 ms
    map( (event)=>{
        const input = event.target as HTMLInputElement // where did the event come from
        return input.value
    } ),
    tap( (item)=>{ // carry out any ancilliary operations
        console.log(`We received ${item}`)
    } ),
    map( (query)=>{ // this processing  could alternatively be in the subscriber
        console.log( suggest(testData, query) )
        return suggest(testData, query)
    } )
)
// NB the observable will NOT be instantiated until there is at least one subscriber
// ... so we need a subscriber
keyStream$.subscribe( (r:string | string[])=>{
    cleanUpUtil(results) // make sure we clean out any previous suggestions
    appendResults(results, r)
} )

// we can have asd many subscribers as we like
const sub99 = keyStream$.subscribe( (r)=>{
    console.log(`Another Subscriber is also in play`)
} )

const subscribers = []

// for(let _=0;_<7;_++){
//     const ns = keyStream$.subscribe( ()=>{} )
//     subscribers.push(ns)
// }

sub99.unsubscribe() // always good to destroy when we no longer need
