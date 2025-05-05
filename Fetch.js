const url = "https://worldtimeapi.org/api/timezone/Afric/Kigali";

async function getData(params) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData();

//fetch() is already a built-in Promise-based function.
//ohh forgetting to put await there  that means we will be working with a pending promise instead of actualy data

// 🧠 Bonus Tip: res.text() vs res.json()
// Use res.text() if the response is plain text.

// Use res.json() if the response is JSON (which is usually the case for APIs).

// There’s also res.blob() and res.formData() for files and forms.

// Wrong: Just logging the response
const res = await fetch("https://jsonplaceholder.typicode.com/users");
console.log(res); // Just metadata, no actual user info

// Right:
const data = await res.json();
console.log(data); // 🎉 Now you see the real data (array of users)
