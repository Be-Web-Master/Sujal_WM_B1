//"3. Reverse an array. [1,2,3,4,5,6] -> [6,5,4,3,2,1] (do not use built-in method)

const arr = [1, 2, 3, 4, 5, 6];

function reverse(arr) {
    const resultArr = [];
    for (let i = arr.length-1; i >= 0 ; i--) {
        resultArr.push(arr[i]);
    }
    return resultArr;
}

console.log(reverse(arr));