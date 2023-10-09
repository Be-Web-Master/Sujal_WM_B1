// Find the substring exists in a string or not - do not use built in method (includes or substring)
// const arr = [ "abcd", "advc", "babd", "cde" ]
// const substring = "ab"
// output - ["abcd", "babd"]
// function getStringsBySubstring(arr, substring) -this function will return an array of string which includes given substring

const arr = [ "abcd", "advc", "babd", "cde" ]
const substring = "ab"

function getStringsBySubstring(arr, substring){
    const result = [];
    arr.forEach(str => {
        let flag = false;
        for (let i = 0; i < str.length; i++) {
            if(str.charAt(i)===substring.charAt(0)) {
                for (let j = 0; j < substring.length; j++) {
                    if(str.charAt(j+i)===substring.charAt(j)) flag = true;
                    else flag = false;
                }
            if(flag) result.push(str)
            }
        }
    });
    return result;
}

console.log(getStringsBySubstring(arr,substring));

