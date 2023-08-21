let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let age = document.getElementById('age');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let male = document.getElementById('male');
let female = document.getElementById('female');
let errorMessage = document.getElementsByTagName('p')[0];
const validateInput = (input) => {
    if (input === 'age'){
        if (age.value < 18) {
            errorMessage.innerText = "Age should be greater than 18";
        }
        else if (age.value > 100) {
            errorMessage.innerText = "Age should be lesser than 100";
        }
        else errorMessage.innerText = " "
    }
    if (input === 'phone') {
        if (phone.value.length < 10 || phone.value.length > 10) {
            errorMessage.innerText = "phone number digit must be 10";
        }
        else errorMessage.innerText = " "
    }
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        phone: phone.value,
        gender: male.checked ? "Male" : "Female"
    });
}