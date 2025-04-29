//local storage  its a browser feature that helps  to store key-value data in the user's browser even after refresf or closig the tab
//only stores strings
//can hold 5mb of data
//sync /blocking not as fetch
//used a lot in caching , savinf user settings tokesns and more.

// //save data
// localStorage.setItem("username", "alainfabrice");
// //getData()
// const name = localStorage.getItem("username");
// console.log(name);

// // remove data
// localStorage.removeItem("username");

// // clear all
// localStorage.clear();

// const user = {
//   name: "Alain",
//   level: "JS Pro",
// };

// //to save
// localStorage("username", JSON.stringify(user));
// //get data
// const data = JSON.parse(localStorage.getItem("user"));
// console.log(data);

async function getData() {
  const cached = localStorage.getItem("kigaliTime");

  if (cached) {
    console.log("From Cache:", JSON.parse(cached));
    return;
  }

  const response = await fetch(
    "https://worldtimeapi.org/api/timezone/Africa/Kigali"
  );
  const data = await response.json();

  localStorage.setItem("kigaliTime", JSON.stringify(data));
  console.log("From API:", data);
}

getData();
