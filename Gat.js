// Implement a timeout for an asynchronous fetch request. If the request takes longer
// than(5 milliseconds) , it should be aborted.
//these is the gat done  10/06/2025
let url = "https://jsonplaceholder.typicode.com/users";

async function timeAbort(url, delay) {
  let controller = new AbortController();
  let signal = controller.signal;
  setTimeout(() => {
    controller.abort();
  }, delay);
  try {
    let res = await fetch(url, { signal });
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
timeAbort(url, 5000);
console.log(6);
