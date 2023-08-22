//Write a program that counts the number of times a user clicks anywhere on the page and displays the count in an element with the ID "clickCount".

const clickCount = document.getElementById("clickCount");
let count = parseInt(clickCount.innerText);
document.addEventListener("click", () => {
    clickCount.innerText = " " + count++;
})