// Remove same character from a string if it exists 3 times
// const string = "aabbaa"
// output - "bba"
// function removeSubstring(string) - this function will return string
// explanation - a appeared 3 times so we have remove 3 a's
// b appeared 2 times so can't remove
// last a will not be removed bcoz we don't have another 2 a's in the string


const string = "aabbaa";

function removeSubstring(string){
    const map = new Map();
    for (let i = 0; i < string.length; i++) {
        if(map.get(string.charAt(i))) {
            map.set(string.charAt(i), map.get(string.charAt(i)) + 1);
        }
        else {
            map.set(string.charAt(i), 1);
        }
    }
    console.log(map);
    let newStr = "", count = 3, idx = 0;
    for (const [key, value] of map) {
        // console.log(key,value);
        if(value >= 3) newStr+=key;
    }
    console.log(newStr);
    for (let i = 0; i < string.length; i++) {
        if(string.charAt(i)===newStr.charAt(idx)){
            
        }
    }
    // for (let i = 1; i < string.length; i++) {
    //     if(string.charAt(i-1)!==string.charAt(i)){
    //         for (let j = 0; j < array.length; j++) {
    //             if(i!==j && string.charAt(i)===string.charAt(j))
    //         }
    //     }
    // }
}

console.log(removeSubstring(string));

