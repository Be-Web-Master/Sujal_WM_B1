// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }

// fetchData("https://node-server-l898.onrender.com")

fetch("https://node-server-l898.onrender.com").then((response)=> response.json()).then((data)=> console.log(data)).catch((error)=> console.log(error))