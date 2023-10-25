// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

function isGoodString(s,goal) {
    let str = "";
    for (let i = 1; i < s.length; i++) {
        str = s.substring(i) + s.substring(0,i);   
        // console.log({str});
        if(str===goal) return true;    
    }
    return false;
}

console.log(isGoodString("abcde", "abced"));