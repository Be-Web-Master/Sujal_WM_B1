const myBtn = document.getElementById("btn");

myBtn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => { return response.json() }).then((data) => { console.log({data}); }).catch((error) => { console.log(error); })
})

// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// }