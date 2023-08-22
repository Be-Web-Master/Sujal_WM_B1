let fisrtName = document.getElementById('fisrtName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let age = document.getElementById('age');
let phone = document.getElementById('phone');
let myBtn = document.getElementById('btn');
let errorMessage = document.getElementsByTagName('p')[0];
console.log(errorMessage);
const validateData = (input) => {
    if(input==="age"){
        if(age.value < 18) {
            errorMessage.innerText ="age must be greater than 18"
        }
        else if (age.value > 100) {
            errorMessage.innerText = "age must be less than 100"
        }
        else errorMessage.innerText = " "
    }
    else if (input === "phone") {
        if (phone.value.length < 10) {
            errorMessage.innerText = "phone number digit must be 10"
        }
        else if (phone.value.length > 10) {
            errorMessage.innerText = "phone number digit must be 10"
        }
        else errorMessage.innerText = " "
    }
}

const handleSubmitButton = (event) => {
    event.preventDefault();
    console.log({
        fisrtName: fisrtName.value,
        lastName: lastName.value,
        age: age.value,
        email: email.value,
        phone: phone.value,
    });
}

myBtn.addEventListener("click", (event) => {
    event.preventDefault();
    myBtn.innerText = "Submitted"
})