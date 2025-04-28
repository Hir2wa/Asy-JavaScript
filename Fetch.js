const url = "https://worldtimeapi.org/api/timezone/Afric/Kigali";

async function getData(params) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getData();
