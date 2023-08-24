const idInput = document.getElementById("idInput");
const todoList = document.getElementById("todoList");
const submitBtn = document.getElementById("submitBtn");
const dataResponse = document.getElementById("dataResponse");
const searchInput = document.getElementById("searchInput");
const todoListData = [];

const get_url = (idInputVal) =>  `https://jsonplaceholder.typicode.com/todos/${idInputVal}` ;



function addElement(arrNum) {
    const liTagElement = document.createElement('li');
    liTagElement.innerText = arrNum;
    todoList.append(liTagElement)
}

async function fetchData(url) {
    const todoDataResponse = await fetch(url);
    const todoData = await todoDataResponse.json();
    return todoData;
}

function btnText() {
    submitBtn.innerText = "Add";
}

function dataArr(todoData) {
    todoListData.push(todoData.title);
    return todoListData;
}
function clearUI() { todoList.innerHTML = "";}

function updateUi(arr) {
    clearUI();
    for (const i of arr) {
        addElement(i);
    }  
}

function searchArr(arr,searchVal) {
    clearUI();
    arr.forEach((num) => {
        if (num.includes(searchVal)) addElement(num);
    });
}


const handleAddTaskSubmit = async (event) => {
    event.preventDefault();
    
    const idInputVal = idInput.value;
    if (idInputVal === '' || idInputVal < 1 || idInputVal > 200) {
        alert("Enter a valid id");
        return;
    }

    submitBtn.innerText = "Adding";

    const todoData = await fetchData(get_url(idInputVal));

    btnText();
    if (!todoData.title) {
        alert("Failed get data");
        return;
    }
    dataArr(todoData);
    updateUi(todoListData);
    dataResponse.setAttribute("style", "display: block;")
    idInput.value = '';
    submitBtn.innerText = "Add";
    
};

const handleSearchInput = (event) => {
    const searchVal = event.target.value;
    searchArr(todoListData,searchVal);
}