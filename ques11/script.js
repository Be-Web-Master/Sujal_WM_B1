//11. Create a button and when user click on button then it show a modal with user's name, age, gender and email with a "Close" text on the top right side and hide modal click of this text.

let myBtn = document.getElementById("myBtn");
let cardDisplay = document.getElementById("card");
cardDisplay.style.display = "none"
myBtn.addEventListener(click,()=>{
    cardDisplay.style.display="block";
    console.log(cardDisplay);
})