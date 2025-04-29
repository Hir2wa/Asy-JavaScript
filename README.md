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
