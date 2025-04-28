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
//syncrous code block code next to them
//Asys doesn't

// function syncFunc() {}
// console.log("hello world");
// function asyncFunc() {}
// console.log("hello world");

//a  promise object takes a function that takes asyns operations
//also these function it self two parameters
//one if the promises is successfulluy fullfueld
//another if the promis failed
//in other cases the promise is not fillfied
// byy default the promise is pending
//these is for the promis maker

//lets go to the promis reciever
//that will be where we call our async funct from

// function getWeather() {
//   return new Promise(function (resolve, reject) {});
// }

// const promise = getWeather();
// promise;

//here default these promises is in pending state

function getWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("...");
    }, 100);
  });
}

function getWeatherIcon(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case "sunny":
          resolve("hot");
          break;
        case "cloudy":
          resolve("cold");
          9;
        case "rainny":
          resolve("too cold");
        default:
          reject(" No Weather Found");
          break;
      }
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`Success: ${data}`);
}

function onError(data) {
  console.log(`Error: ${data}`);
}

getWeather().then(getWeatherIcon).then(onSuccess, onError);

//now we managed to event to put promise chaining

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Wow");
    }, 100);
  });
}

function func2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Good Data");
    }, 100);
  });
}

function theSuccess(data) {
  console(`Success:  ${data}`);
}

function theError(data) {
  console.log(` 
        Failer  ${data}`);
}

function inTheEnd() {
  console.log("finally we be fone");
}

func1().then(func2).then(onSuccess).catch(onError).finally(inTheEnd);
