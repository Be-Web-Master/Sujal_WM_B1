//21. Using loop, Create a function that takes a string as input and returns the reverse of that string.

function reserveString(str) {
    let i = str.length-1, revStr = "";
    while(i>=0){
        revStr = revStr.concat(str.charAt(i))
        i--;
    }
    return console.log(revStr);
}

reserveString("qwerty")