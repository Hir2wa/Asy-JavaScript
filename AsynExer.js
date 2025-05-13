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
      let users = data.map((users) => users.id);
      console.log(typeof users);

      console.log(`All Users: ${users}`);

      console.log("Data Fetched:  ", data[0].id);
      let newObject = {};
      for (const user of data) {
        newObject[user.id] = user.name;
      }
      console.log(`Object(name,id)`, newObject);

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
