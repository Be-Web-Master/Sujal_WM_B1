// Easy - Capitalize first letter of every string in an array
// const arr = [ "abcd", "Pqrs", "xyz", "lmno" ]
// output - [ "Abcd", "Pqrs", "Xyz", "Lmno" ]
// function capitalizeFirstChar(arr) - this function will return array of strings with the first character as capital

const arr = [ "abcd", "Pqrs", "xyz", "lmno" ]


function capitalizeFirstChar(arr){
    for (let i = 0; i < arr.length; i++) {
        let newStr = "";
        if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
          newStr = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
          arr[i] = newStr
        }
        else arr[i] = arr[i];
    }
    return arr;
}

console.log(capitalizeFirstChar(arr));