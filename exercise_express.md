Continue with the Express project 
- make use of the documentation e.g. https://expressjs.com/en/guide/routing.html

Build routes to return '/about' and '/contact' content (just simple content will do)

Catch the routes '/greet' and '/welcome' with the same content response
Build 404 content for missing routes
Put some text content into a file. Build a '/read' route that will read the text and return it to the user. (You could use 'next' for this)
If you like, return a chunk of static JSON instead of simple text
Remember to use automation when it helps
- npm run dev and npm run build
- package.json...
- maybe try some .ts (it can be progressively added)


If Time
-------
Build routes that call your earlier project work
'/users/:id' to retrieve a user from https://jsonplaceholder.typicode.com/users/:id
'/photos/:id' to retrieve a user from https://jsonplaceholder.typicode.com/photos/:id
These would call your other microservices to carry out the functionality

Optional
--------
Build upon the 'web observables' example and the 'swapi' exercise to implement 
a way for users to type a category (people, planets etc) and see the JSON from
https://swapi.dev/api/<category> with an optional /<id> on the end

Use Node Events and event handlers to carry out several operations in response to
a successful server-route. E.g. emit an 'about' event for the /about route
which is handled by a file-writer function and a logger function

Further Optional
----------------
Write a generator to yield URLs in sequence
(e.g. bbc.co.uk, duckduckgo.com, gov.uk/government/organisations/companies-house)
Use tis generator to iteratively populate an HTML <nav> menu of hyperlinks