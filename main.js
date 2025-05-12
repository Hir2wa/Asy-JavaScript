function startWorker() {
  const worker = new Worker("worker.js");

  worker.postMessage(1e9);

  worker.onmessage = function (e) {
    document.getElementById("output").textContent = e.data;
  };

  alert("You clicked! UI is still responsive 😎");
}
