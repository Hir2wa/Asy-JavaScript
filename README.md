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
