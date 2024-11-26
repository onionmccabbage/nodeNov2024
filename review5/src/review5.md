1hr plus 15 min break at 3:00-3:15

Continue the photo fetch project
- set up some scripts for prod and dev (dev will --watch)
- find a way to pass a numeric id into the function
  use argv at run time,  read from a static file,   get the value from a generator

Client-Server
- wrap the code in a microservice, so requests such as /1 or /42 
  retrieve that ID and return the JSON
  also write the retrieved data to a persistent file

Logging and Faults
- use pino to log problems to a file. Decide when to log warn, info or error

Optional
- use debug tools (in VSCode or in Chrome Dev Tools)
- write at least one minor unit test for a module of your code
  (remember to npm install vitest or your testing tool of choice)