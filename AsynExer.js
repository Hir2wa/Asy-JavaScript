async function fetchFirstUserPostsWithRetries() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let response;
  if (response == "rejected") {
    for (let index = 0; index <= 2; index++) {
      response = await fetch(url);
      let data = await response.json();
      console.log(data);
    }
  }
}

fetchFirstUserPostsWithRetries();
