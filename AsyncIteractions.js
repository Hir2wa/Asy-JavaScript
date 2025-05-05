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

const urlss = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

async function fetchAllPosts() {
  for await (let urls of urlss) {
    const res = await fetch(urls);
    const data = await res.json();
    console.log(data.title);
  }
}

fetchAllPosts();

const arls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

async function fetchAllParallel() {
  try {
    const fetchPromises = arls.map(async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return data.title;
    });

    const titles = await Promise.all(fetchPromises);

    // Log all titles after all fetches complete
    titles.forEach((title, index) => {
      console.log(`Post ${index + 1} title:`, title);
    });
  } catch (err) {
    console.error("Something went wrong 💥", err);
  }
}

fetchAllParallel();
