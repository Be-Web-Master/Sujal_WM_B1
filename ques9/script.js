//Create a div element with some text inside. Implement a mousedown event listener that changes the text to "Clicked!" when the user clicks on the div (Event: mousedown).

const val = document.getElementById('container')

 val.addEventListener('mousedown', (event) => {
    val.innerText = "Clicked!"
})