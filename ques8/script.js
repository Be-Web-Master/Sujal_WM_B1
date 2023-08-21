//Design an input field. Implement a keyup event listener that displays an alert with the current value of the input field whenever a key is released (Event: keyup).

const val = document.querySelector("#text")

val.addEventListener('keyup', (event) => {

    console.log({ event });
    alert(event.key)
})