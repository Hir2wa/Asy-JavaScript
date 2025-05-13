async function fetchFirstUserPostsWithRetries() {
  let url = "https://jsonplaceholder.typicode.com/users";
  for (let index = 0; sd; index++) {}
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
}

fetchFirstUserPostsWithRetries();
