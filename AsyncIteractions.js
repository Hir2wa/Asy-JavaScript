const urls = [
  "https://api.example.com/data/1",
  "https://api.example.com/data/2",
  "https://api.example.com/data/3",
];

async function fetchAll() {
  for await (const url of urls) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }
}

fetchAll();
