const myBtn = document.getElementById("btn");
let apiData = {};
async function submitBtn(event){
    event.preventDefault();
    let objId = document.getElementById("objId").value;
    let url = "https://jsonplaceholder.typicode.com/todos/".concat("" + objId);
    if(objId>200 || objId < 1) {
        console.log("Id must be less than 200 and greater than 0");
    }
    else{
        apiData = await fetchData(url);
        document.getElementById("card").innerHTML = `<p><strong>${apiData.id} : </strong> ${apiData.title}</p>`
        console.log(apiData);
    }
    
}

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

