// Word Pattern
// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

const pattern = "abba", s = "dog cat cat dog";

function matchPattern(pattern,s){
    const strArr = s.split(" ");
    if(strArr.length!==pattern.length) return false;

    const obj = {};
    for (let i = 0; i < strArr.length; i++) {
        obj[pattern.charAt(i)] = strArr[i];
    }
    for (let i = 0; i < strArr.length; i++){
        if(obj[pattern.charAt(i)]!== strArr[i]) return false;
    }
    return true;
}


console.log(matchPattern(pattern,s));