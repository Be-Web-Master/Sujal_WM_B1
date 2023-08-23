//23. Convert a given string to uppercase using a loop.
const string = "asdfqwerty";
function myUppercase(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        let charcode = string.charAt(i).charCodeAt(0)-32;
        newString = newString + String.fromCharCode(charcode);
    }
    return newString;
}

console.log(myUppercase(string));
