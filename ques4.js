// Medium - Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// function groupAnagrams(strs) - this will return array of grouped anagrams

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(strs) {
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    let temp = [];
    for (let j = 0; j < strs.length; j++) {
      if (i !== j && strs[i].length === strs[j].length) {
        console.log("loop started");
        let newStrArr1 = strs[i].split("");
        newStrArr1.sort();
        let newStrArr2 = strs[j].split("");
        newStrArr2.sort();
        let newStr1 = "",
          newStr2 = "";
        for (let k = 0; k < newStrArr1.length; k++) {
          newStr1 += newStrArr1[k];
          newStr2 += newStrArr2[k];
        }
        if (newStr1 === newStr2) {
          temp.push(strs[j]);
          console.log({ newStr1, newStr2 });
          console.log("Pushed", temp);
        }
        // else temp.push(strs[i])
      }
    }
    if (temp.length > 0) {
      result.push(temp);
      console.log("resultarr", result);
    }
  }
  // return result;
}

console.log(groupAnagrams(strs));
