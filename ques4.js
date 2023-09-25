//"4. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function isPalindrome(str) {
    let resultStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        resultStr += str[i];
    }

   return resultStr===str? true : false
}

console.log(isPalindrome("nitin"));
