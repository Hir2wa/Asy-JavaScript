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
