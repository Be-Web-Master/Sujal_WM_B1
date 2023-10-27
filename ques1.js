// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false

function isCapitalRight(word) {
    if (word.toUpperCase() === word) return true;
    if (word.toLowerCase() === word) return true;
    const str = word.charAt(0).toUpperCase() + word.toLowerCase().substring(1);
    if(str===word) return true;
    return false;
}

console.log(isCapitalRight("Google"));