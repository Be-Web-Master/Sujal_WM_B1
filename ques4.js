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
    let newStr = "", count = 3, idx = 0, flag = false;
    for (const [key, value] of map) {
        if(value >= 3) newStr+=key;
    }
    
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === newStr.charAt(idx)) {
        for (let j = 0; j < newStr.length; j++) {
          if (string.charAt(j + i) === newStr.charAt(j)) flag = true;
          else flag = false;
        }
        if (flag) {};
      }
    }
}

console.log(removeSubstring(string));

