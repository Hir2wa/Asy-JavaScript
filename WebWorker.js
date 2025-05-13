function randomDelay(min = 1, max = 5) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function raceTask(id) {
  const delay = randomDelay();
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`🏁 Task ${id} finished in ${delay}s`);
      resolve({ id, delay });
    }, delay * 1000);
  });
}

async function startRace() {
  const taskCount = 5;
  const tasks = [];

  for (let i = 1; i <= taskCount; i++) {
    tasks.push(raceTask(i));
  }

  const results = await Promise.all(tasks);

  const sorted = results.sort((a, b) => a.delay - b.delay);

  console.log("\n🎉 RACE RESULTS (fastest to slowest):");
  sorted.forEach((t, index) => {
    console.log(`${index + 1}. Task ${t.id} - ${t.delay}s`);
  });
}

startRace();
