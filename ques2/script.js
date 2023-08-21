//2 Design a form with a single input field and a submit button. When the form is submitted, display an alert with the text entered in the input field (Event: submit).

document.getElementById("form").addEventListener('submit', (event) => {
    alert(event.target.input.value)
})