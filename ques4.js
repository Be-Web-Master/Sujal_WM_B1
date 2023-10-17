// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:

const words = ["Hello", "Alaska", "Dad", "Peace"];
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]

function validateAmericanKeyboard(strs) {
  const testWords = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const result = [];
  let j = 0;
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].toLowerCase();
    let word = "";
    if (j < testWords.length) {
      word = testWords[j++];
    }
    let count = 0;
    const temp1 = [], temp2 = [];
    for (let k = 0; k < str.length; k++) {
      for (let l = 0; l < word.length; l++) {
        if (k !== l && str.charAt(k) === word.charAt(l)) count++;
        // console.log(str.charAt(k), word.charAt(l));
        
      }
    }
    console.log({ count, i, str });
    if (count === str.length - 1) result.push(strs[i]);
  }
  return result;
}

console.log(validateAmericanKeyboard(words));
