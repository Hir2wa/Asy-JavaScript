Feature Callbacks Promises
💡 Concept A function passed as an argument to another function An object representing the eventual result of an async operation
🔄 Chaining Messy (callback hell 😵) Clean and readable .then() chaining
🧠 Error Handling Must handle errors manually in each callback Built-in .catch() makes error handling easy
🌐 Use Case Older way, still used in some libraries Modern, more powerful and easier to read
📟 Looks like doSomething(callback) doSomething().then().catch()

there is some place where there is no neeed to use the asyc and await at the some time and that the where on two places only
.in js modules
.in chrome dv tools may be create js modules to use the them

only the asys and await anoly affects promises reciever not the maker
since we are only removing the then and catch block

.any function almost can be converted to asyn
ex on object methods
.all async function return a promise
.Error handling with try/catch
also can work

why do people use try and catch in asys and await mostly

                  fetch api

===============================================
fetch is a function buld into js you can to send a request to an api

how does fecth get know where to find the information

1. you pass a url into that function //you can use in api you want aslong as it is publical
   but actually fetch request more than a url
2. fetch it takes a request object and retur a response object;
   both these properties have their own methods and properties

when you do these actually js create a request object for you
i mean these one
const request =

new Request (someapi.com);
also these request will have a method is it get is post

these one is created
const response = fetch (request);
you don't have to those js sometime do it for you

so we move to these one only
const response = fetch('someApi.com');

==============================
GET Request Parameters
where you need to send some data to api telling it what to get

hearde that a different to do that where you need to use request object

by not needing addition header you can pass url only
but if requested additional one you will need to create request variable to to create Request object
where first parm is url and other are , {

headers:{
and put the following objects and then continue
}

}

//here we go back to error handling
making a trip to api is concerdered as success even if the api is giving the error

when we get the error on fetch that means the fetch method fails but when i get diffferent erro on the inside api is concered as successfully

here we can use the response object which have a property
status:
ok:

we have server error where we check them using if condition in try
data.error.message
in try is that we failed even failing

// we use post in additional header  
when we need to submit forms and

//more to cover cacheing and cores
//on mdn using the fetch api +learn by doing

//fetch arrived in modern browsers btn 2015 and 2017
//arrived on node 2022
xhr htttp request by requesting something to server
//http request  
why fetch ? the most avious answer
is that we can have native support +docs
no installation required
support most cases from modern application

//the xhr way was kind of mess it is based on callbacks
vs promisees it was realy had to setup
fect achieves the same things but with same thing

Promise method
method race : returns promise which was resolved first to finish wins
method all: retursn true if all promises resolved and false when one reject no bolloen but returns rejected in the console

method allsettled()
whatever for each promise returns an array of status and and value and reason

//you don't create a response it is automatically created by the fetch method woow
the request you have to create it

fetch("https://api.example.com/data", { method: "GET" });

fetch("https://api.example.com/data");

we have different methods to be applied on the request object
-put pull update
-get by default
-post posting information
-patch partial update used to update part of the resources
-delete removing something on the server

http methods

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))

the Error you get which is not blocking like getting underfinded is timing issue which is caused by accessing data which are not yet ready

Throttling/Debouncing: Control how often async stuff (like fetch) runs during user input.

Lazy Loading with Promises: Only fetch/load what you need when you need it.

Loading States: How to show spinners/loaders using async events.

Async Iteration: Using for await...of to loop over async data streams.

Web Workers: Run heavy async stuff in background threads.

//web workers
🧠 CPU-wise: What’s Really Going On?
When you spin up a Web Worker, the browser creates a new thread (under the hood, via OS APIs).

Now the CPU has multiple threads to schedule on its cores.

It can process your Web Worker concurrently with the UI.

This works beautifully on multi-core CPUs (most devices today).

//they talk through postMessage()
like text between friends

//these is one technique used when dealing with large things which can take time or fleeze you browsr

1.webworker 2.
2.Streams and Response.body
3.AbortController to cancel fetch
//📚 Every deep skill was once a basic you kept practicing.
When you call fetch(), you’re the one making a Request — just like filling out a form and handing it to the server. You get to choose:

Key What it does
method GET, POST, PUT, DELETE — HTTP verbs
headers Add things like Content-Type, tokens, etc
body The data you're sending — usually JSON for APIs
mode, cache, credentials Other config for CORS, cookies, etc

// You want to go next-level and pass
// omplex data (like objects or even typed arrays) between threads?
