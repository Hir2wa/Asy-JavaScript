// 🌐 https://jsonplaceholder.typicode.com/users
// 🌐 https://jsonplaceholder.typicode.com/posts
// (both are fake APIs great for practice)
// 🔁 Exercise 1: Get All User Names
// Goal: Fetch users and log all their names.
// ✅ What you’ll use:
// fetch
// .map()
// async function usersInfo() {
//   let url = " https://jsonplaceholder.typicode.com/users";
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data);

//   let users = data.map((usernm) => usernm.name);

//   console.log(users);
// }

// usersInfo();

// async function postInfo() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data = await res.json();
//   console.log(data);
// }

// postInfo();

async function loadData() {
  const usersURL = "https://jsonplaceholder.typicode.com/users";
  const postsURL = "https://jsonplaceholder.typicode.com/posts";

  try {
    const [usersRes, postsRes] = await Promise.all([
      fetch(usersURL),
      fetch(postsURL),
    ]);

    const users = await usersRes.json();
    const posts = await postsRes.json();

    console.log("Users ", users);
    console.log("Posts ", posts);
  } catch (error) {
    console.error("❌Error loading data:", error);
  }
}

loadData();
