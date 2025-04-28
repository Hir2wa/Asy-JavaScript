function getData() {
  return new Promise(function (resolve, reject) {
    resolve("Something went wrong");
  });
}

async function start2(params) {
  try {
    let result = await getData();
    console.log(` succefully: ${result}`);
  } catch (error) {
    console.log(`Error Cought ${error}`);
  }
}

start2();

// async function start(params) {
//   try {
//     const result = await getData();
//     console.log(result);
//   } catch (error) {
//     console.log(`${error}`);
//   }
// }
// start();
