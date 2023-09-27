//Convert the capital character to lowercase and lowercase character to uppercase
// given string = "WebMaster"
// output - "wEBmASTER"
// function toggleEachCharacter(string) - this function will return the converted string

const string = "WebMaster";

function toggleEachCharacter(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if((string.charCodeAt(i)>=65) && (string.charCodeAt(i)<=90)){
            newString += string.charAt(i).toLowerCase();
        }
        else if((string.charCodeAt(i)>=97) && (string.charCodeAt(i)<=122)){
            newString += string.charAt(i).toUpperCase()
        }
    }

    return newString
}

console.log(toggleEachCharacter(string));