const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // change to false to test rejection
    if (success) {
      resolve(" Promise resolved: Data loaded!");
    } else {
      reject(" Promise rejected: Something went wrong");
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // runs if resolved
  })
  .catch((error) => {
    console.error(error); // runs if rejected
  });
