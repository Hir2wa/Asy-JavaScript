function startWorker() {
  const worker = new Worker("worker.js");

  worker.postMessage(1e9); // Send large number to worker

  worker.onmessage = function (e) {
    document.getElementById("output").textContent = e.data;
  };

  // UI still works while counting 🔥
  alert("You clicked! UI is still responsive 😎");
}
