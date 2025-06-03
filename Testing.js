// function makeNegative(num) {
//   if (num > 0) {
//     return -num;
//   } else if (num < 0) {
//     return num;
//   } else {
//     return 0;
//   }
// }

// if (condition) {
// } else {
// }
// async function getUserData() {
//   const res = await fetch("https://api.example.com/user/1");
//   const data = await res.json();
//   return data;
// }

// getUserData().then((data) => {
//   console.log("User:", data);
// });

async function getUserData() {
  try {
    const res = await fetch("https://api.example.com/user/1");
    if (!res.ok) {
      console.log(`HTTP Error: ${res.status}`);
    }
    let data = res.json();
    console.log(data);
  } catch (err) {
    console.log(" Error fetching user data:", err.message);
  }
}

getUserData();
