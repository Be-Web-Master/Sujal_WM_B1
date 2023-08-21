//Design a form with an input field. Implement a focus event listener that changes the input's border color to blue when it gains focus (Event: focus).
let val = document.getElementById("text")
val.style.outline="none"
val.style.borderColor = "white"

document.getElementById("text").addEventListener('focus', () => {
    val.style.border="2px solid blue"
})