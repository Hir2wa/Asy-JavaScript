//Q1. Create a function called createAlarm that generates a wake-up message for a person after
// a specified time delay. This function should accept two parameters: the person's name and the delay
// time in seconds. The function should return a promise that resolves with the wake-up message
//  (e.g. Wake up person) but if the delay is less than 2 seconds, the promise should be immediately
// rejected with an error message stating Delay is not
// sufficient

const { json } = require("express");

function createAlarm(name, delay) {
  return new Promise(function (resolve, reject) {
    if (delay < 2) {
      reject("Delay Isn't Enough");
    }

    setTimeout(() => {
      resolve(`Wake Up ${name}`);
    }, delay);
  });
}

createAlarm("Alain", 3000)
  .then((answers) => {
    console.log(answers);
  })
  // .then((answer) => {
  //   console.log(answer);
  // })
  .catch((Error) => {
    console.log(Error);
  });

// transforming to async and await

async function testFunction() {
  try {
    let result = await createAlarm("alain", 4000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

testFunction();

//Q2.
//Write a javascript function that changes the background color of the body (HTML tag) every 3 seconds.

//Q3.
//using xmlhttp request

function xmlTest(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.responseText);
      } else {
        reject("Request Error  ");
      }
    };

    xhr.onerror = () => {
      reject("Network Error ");
    };

    xhr.send();
  });
}

async function run() {
  try {
    let response = await xmlTest("https://my-random-api.com/data");
    let data = await JSON.parse(response);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

run();

//Q3:
//Write a JavaScript function
//that fetches data from an API and retries the request a specified number of times if it fails.

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

retriesFetch("https://jsonplaceholder.typicode.com/users");

//Q4. You are building a web application that fetches data from multiple
// APIs to display information about different countries. You need to fetch the country
//  details from one API and the weather information for the capital city from another API.

async function CountryData(countryName) {
  let res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  let data = await res.json();
  let country = data[0];
  let countryOfficial = country.name.common;
  console.log(countryOfficial);

  console.log(country);
}
CountryData("Rwanda");

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
