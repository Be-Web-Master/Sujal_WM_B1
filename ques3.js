// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.
// Example 1:

// const ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

const ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// const ransomNote = "aa", magazine = "aab"
// Output: true

function isConstructed(ransomNote,magazine) {
    let ransomArr = ransomNote.toLowerCase().split("");
    let magazineArr = magazine.toLowerCase().split("");
    ransomArr.sort();
    magazineArr.sort();
    const len = Math.min(ransomArr.length, magazineArr.length);
    for (let i = 0; i < len; i++) {
        if(ransomArr[i]!==magazineArr[i]) return false;     
    }
    return true;
}

console.log(isConstructed(ransomNote,magazine));