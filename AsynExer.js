async function fetchFirstUserPostsWithRetries() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let attempts = 0;
  let retries = 3;

  while (attempts < retries) {
    try {
      let response = await fetch(url);
      if (!response.ok) {
        console.log("HTTP Error! Status :  " + response.status);
      }
      let data = await response.json();
      console.log("Data Fetched:  ", data);
      return data;
    } catch (error) {
      console.log(`Failed  Attempt  ${attempts + 1} : `, error.message);

      attempts++;

      if (attempts >= retries) {
        console.log("All retries failed");
        return null;
      }
    }
  }
}

fetchFirstUserPostsWithRetries();
