//Q1. Create a function called createAlarm that generates a wake-up message for a person after
// a specified time delay. This function should accept two parameters: the person's name and the delay
// time in seconds. The function should return a promise that resolves with the wake-up message
//  (e.g. Wake up person) but if the delay is less than 2 seconds, the promise should be immediately
// rejected with an error message stating Delay is not
// sufficient

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

let array = [2, 4, 5, 6];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}
