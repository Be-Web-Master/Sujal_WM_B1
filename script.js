// const fetchData = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }

// fetchData("https://jsonplaceholder.typicode.com/posts");

fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json()).then((data)=>console.log(data)).catch((error)=>console.log(error));

