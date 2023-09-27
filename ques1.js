//Convert the capital character to lowercase and lowercase character to uppercase
// given string = "WebMaster"
// output - "wEBmASTER"
// function toggleEachCharacter(string) - this function will return the converted string

const string = "WebMaster";

function toggleEachCharacter(string) {
    const newString = "";
    for (let i = 0; i < string.length; i++) {
        if((string.charAt(i)>64) && (string.charAt(i)<91)){
            newString += string.charAt(i).toLowerCase();
        }
        else if((string.charAt(i)>96) && (string.charAt(i)<127)){
            newString += string.charAt(i).toUpperCase()
        }
    }

    return newString
}

console.log(toggleEachCharacter(string));