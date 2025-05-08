function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startCountdown() {
  console.log("⏳ Countdown starting...");

  for (let i = 3; i > 0; i--) {
    console.log(i);
    await sleep(1000);
  }

  console.log("🚀 Boom! Let's go!");
}

startCountdown();
