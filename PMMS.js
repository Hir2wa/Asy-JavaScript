//Q1. Create a function called createAlarm that generates a wake-up message for a person after
// a specified time delay. This function should accept two parameters: the person's name and the delay
// time in seconds. The function should return a promise that resolves with the wake-up message
//  (e.g. Wake up person) but if the delay is less than 2 seconds, the promise should be immediately
// rejected with an error message stating Delay is not
// sufficient

// const { json } = require("express");

// function createAlarm(name, delay) {
//   return new Promise(function (resolve, reject) {
//     if (delay < 2) {
//       reject("Delay Isn't Enough");
//     }

//     setTimeout(() => {
//       resolve(`Wake Up ${name}`);
//     }, delay);
//   });
// }

// createAlarm("Alain", 3000)
//   .then((answers) => {
//     console.log(answers);
//   })
//   // .then((answer) => {
//   //   console.log(answer);
//   // })
//   .catch((Error) => {
//     console.log(Error);
//   });

// // transforming to async and await

// async function testFunction() {
//   try {
//     let result = await createAlarm("alain", 4000);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// testFunction();

// //Q2.
// //Write a javascript function that changes the background color of the body (HTML tag) every 3 seconds.

// //Q3.
// //using xmlhttp request

// function xmlTest(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url);

//     xhr.onload = () => {
//       if (xhr.status >= 200 && xhr.status <= 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject("Request Error  ");
//       }
//     };

//     xhr.onerror = () => {
//       reject("Network Error ");
//     };

//     xhr.send();
//   });
// }

// async function run() {
//   try {
//     let response = await xmlTest("https://my-random-api.com/data");
//     let data = await JSON.parse(response);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// run();

// //Q3:
// //Write a JavaScript function
// //that fetches data from an API and retries the request a specified number of times if it fails.

async function retriesFetch(url) {
  tries = 0;
  limit = 5;
  while (tries < limit) {
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      return;
    } catch (error) {
      tries++;
      console.log(`trial ${tries} fails `);

      if (tries === limit) {
        console.log(`All ${tries}  failed `);
        console.log(`Error ${error}`);
      }
    }
  }
}

retriesFetch("https://jsonplaceholder.typicode/users");

//Q4. You are building a web application that fetches data from multiple
// APIs to display information about different countries. You need to fetch the country
//  details from one API and the weather information for the capital city from another API.

// async function CountryData(countryName) {
//   let res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//   let data = await res.json();
//   let country = data[0];
//   let countryOfficial = country.name.common;
//   console.log(countryOfficial);
//   let city = country.capital[0];
//   console.log(city);

//   console.log(data[0].capitalInfo.latlng);
// }
// CountryData("Rwanda");

// async function weather(country) {
//   let res = await fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true"
//   );
//   let data = await res.text();
//   return data;
// }

// let climate = weather();

// function Datails() {
//   return ` ${weather}  , ${city}`;
// }

// console.log(Datails());

// function toFetch(url1, url2) {
//   return new Promise((resolved, reject) => {
//     Promise.all([fetch(url1), fetch(url2)]);
//   });
// }

// toFetch(url1, url2)
//   .then(() => {
//     console.log("Data Fetched Successfully");
//   })
//   .catch(console.log("something went wrong "));

// const url1 = "https://jsonplaceholder.typicode.com/posts";
// const url2 = "https://jsonplaceholder.typicode.com/users";

// async function toFetch(url1, url2) {
//   try {
//     let urls = [url1, url2];
//     const promises = urls.map((url) => fetch(url).then((res) => res.json()));
//     let result = await Promise.all(promises);

// result.forEach((promise1, index) => {
//   console.log(`Promise ${index}`, promise1);
// });
//     console.log(result[0][0]);
//     let postcounts = result[1].map((user) => {
//       let userPosts = result[0].filter((post) => post.userId === user.id);
//       return {
//         username: user.username,
//         totalPosts: userPosts.length,
//       };
//     });
//     console.log(postcounts);
//   } catch (error) {
//     console.log(`Something  Went Wrong : ${error}`);
//   }
// }

// toFetch(url1, url2);

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/users",
  "https://invalid-url.typicode.com/does-not-exist", // 😈 will fail
];

// async function fetchData() {
//   const promises = urls.map((url) => fetch(url).then((res) => res.json()));

//   const results = await Promise.allSettled(promises);

//   results.forEach((result, index) => {
//     if (result.status === "fulfilled") {
//       console.log(`✅ URL ${index + 1} succeeded:`, result.value);
//     } else {
//       console.warn(`❌ URL ${index + 1} failed:`, result.reason);
//     }
//   });
// }

// fetchData();

// const posts = "https://jsonplaceholder.typicode.com/posts";
// const users = "https://jsonplaceholder.typicode.com/users";

// async function allUsers(postss, userss) {
//   try {
//     let urls = [postss, userss];
//     let promises = urls.map((url) => fetch(url).then((res) => res.json()));
//     let result = await Promise.allSettled(promises);

//     let [post, user] = result;
//     if (user.status !== "fulfilled") {
//       console.log("Error feching Data");
//       return;
//     }
//     if (post.status !== "fulfilled") {
//       console.log("Error feching the user");
//       return;
//     }
//     let posts = post.value;
//     let users = user.value;
//     let countPostPerUser = users.map((user) => {
//       let postuser = posts.filter((post) => post.userId === user.id);

//       return {
//         username: user.username,
//         TotalPost: postuser.length,
//       };
//     });
//     console.log(countPostPerUser);

//     console.dir(result, { depth: null });
//   } catch (error) {
//     console.log(error);
//   }
// }

// allUsers(posts, users);

// 🔥 What's Next?
// Wanna level up?
// Here’s where you could go next:

// Promise.race / Promise.any → For fastest response wins or first-success-win logic

// AbortController → Cancel fetch if it takes too long (real-world stuff)

// Handle APIs with errors / 404 / 500 etc

// Loading spinners / async UIs → Build something cool in the browser

// Connect your fetch to a real UI (like in Swing but in browser with HTML+JS)

//loging the item in the after 2 seconds
// const items = ["A", "B", "C"];

// async function logDelay(delay) {
//   return new Promise((resolve) => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < items.length) {
//         console.log(items[index]);
//         index++;
//       } else {
//         clearInterval(interval);
//         resolve("✅ Done logging items");
//       }
//     }, delay);
//   });
// }

// async function Delay() {
//   let result = await logDelay(1000);
//   console.log(result);
// }

// Delay();

// function wait(delay) {
//   return new Promise((res) => setTimeout(res, delay));
// }
// async function loggingItem() {
//   for (const element of items) {
//     console.log(element);

//     await wait(1000);
//   }
// }

// loggingItem();

async function fetchWithAbort() {
  const controller = new AbortController(); // Create controller
  const signal = controller.signal; // Signal attached to the fetch

  // Abort after 1 second
  setTimeout(() => {
    controller.abort(); // Cancel the fetch
  }, 1000);

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal,
    });
    const data = await res.json();
    console.log("✅ Fetched:", data);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("❌ Request was aborted!");
    } else {
      console.log("⚠️ Other error:", err);
    }
  }
}

fetchWithAbort();
