//Without using substring, Extract a substring from a given string based on start and end indices using loops.


function mySubstring(str, startIdx, endIx) {
    resultStr = "";
    if(!endIx) endIx = str.length;
    for (let i = startIdx; i < endIx; i++) {
        resultStr = resultStr.concat(str.charAt(i)); 
    }
    console.log(resultStr);
}

mySubstring("qwertyuiop",4);
