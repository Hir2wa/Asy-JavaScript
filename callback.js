function myCallBack(callback) {
  setTimeout(() => {
    callback("hello world");
  }, 1000);
}

myCallBack((name) => {
  console.log(name);
});
