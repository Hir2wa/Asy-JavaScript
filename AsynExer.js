async function fetchFirstUserPostsWithRetries() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
}

fetchFirstUserPostsWithRetries();
