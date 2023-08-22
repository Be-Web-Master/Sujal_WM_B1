//Get indices of all occurrences of a value in an array (almost polyfill of Array.prototype.findIndex)
// — create a function that takes 2 args: arr, value
// — this function returns a an array of numbers, where each number is the index position of the value in arr

function indicesOfVal(arr,val) {
    if (!arr.length) return -1;
    let indices = [];

    arr.forEach((num,i) => {
        if (num === val) indices.push(i);
    });

    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i]===val) indices.push(i);
    // }
    return indices;
}

console.log(indicesOfVal([12, 23, 34, 12, 67, 8], 12)); 