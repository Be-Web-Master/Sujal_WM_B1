//Get the unique values of an array
// — create a function that takes 1 args: arr
// — this function returns a new array of values from arr, only those which occur only once in that array

function uniqueVal(arr) {
    if (!arr.length) return -1;
    let uniqueVals = [], obj = {};
    arr.forEach((num, i, arr) => {
        // obj.num = 1;
        obj[num] = 1;
    });
    
    for (const key of Object.keys(obj)) {
        uniqueVals.push(key);
    }
    return uniqueVals
}

console.log(uniqueVal([12, 23,12,76,67, 34, 12, 67, 8]));