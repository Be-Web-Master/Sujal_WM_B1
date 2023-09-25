//"2. Find if the given number exists in an array - ( do not use built-in function ) [11,34,22,21,5,22] -> find 21 if exists return true otherwise false

const arr = [11, 34, 22, 21, 5, 22];
const searchVal = 21;

function findElem(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===val) return true;
    }
    return false;
}

console.log(findElem(arr,searchVal));