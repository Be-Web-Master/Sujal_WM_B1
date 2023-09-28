// Remove all the smaller characters from a string
// function removeSmallChars(string) - this function will return an string which does not have any small character
// const string = "AaBBccdeF"
// output - "ABBF"


const string = "AaBBccdeF"

function removeSmallChars(string){
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90) newString+= string.charAt(i);   
    }
    return newString;
}

console.log(removeSmallChars(string));