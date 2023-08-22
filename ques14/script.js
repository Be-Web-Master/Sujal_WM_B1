//Create a list of 4 items with different ID. When any of the list items are clicked, log the text content of the clicked item to the console.

function clickContent(id) {
    const divId = document.getElementById(id);
    divId.addEventListener("click", () => {
        console.log(divId.innerText);
    })
}