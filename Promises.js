// const { response } = require("express");

// //real world example to turn into
// function realPromise() {
//   new Promise(function (resolve, reject) {
//     //the fetch come with the parameters either string or object with a stringfier
//     //resorce parameter comes with a resource you wish to fetch
//     // the object comes with url

//     //an option comes with any option you can apply to your resources
//     //request unit an objrct that contain a settings that you can apply to the request

//     //a promise that resolve a request object

//     let url = "";
//     fetch(url)
//       .then((response) => response.json())
//       .them((data) => resolve(data))
//       .reject((err) => reject(erro));
//   });
// }

// realPromise().then;

function realPromise() {
  const url = "https://jsonplaceholder.typicode.com/users/1";

  return new Promise(function (resolve, reject) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

realPromise()
  .then((data) => {
    console.log("Final data:", data);
  })
  .catch((err) => {
    console.error("Something went wrong:", err);
  });
