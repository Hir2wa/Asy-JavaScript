// 🌐 https://jsonplaceholder.typicode.com/users
// 🌐 https://jsonplaceholder.typicode.com/posts
// (both are fake APIs great for practice)
// 🔁 Exercise 1: Get All User Names
// Goal: Fetch users and log all their names.
// ✅ What you’ll use:
// fetch
// .map()
async function usersInfo() {
  let url = " https://jsonplaceholder.typicode.com/users";
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);

  let users = data.map((usernm) => usernm.name);

  console.log(users);
}

usersInfo();
