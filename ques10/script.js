//10. Create a div of full 100vh and 100vw width and when user right click on div then changes background color to a random color on each click.

const val = document.getElementById('container')

val.addEventListener('contextmenu', (event) => {
    val.style.backgroundColor="gray"
})