//give a world timeapi .org to work on please
const url = "https://worldtimeapi.org/api/timezone/Afric/Kigali";

async function getData(params) {
  const response = await fetch(url);
  const data = response.json();
  console.log(data);
}

getData();

//fetch return an object
