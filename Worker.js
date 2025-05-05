// worker.js
onmessage = function (e) {
  let count = 0;
  for (let i = 0; i < e.data; i++) {
    count++;
  }
  postMessage(`Done counting to ${count}`);
};
