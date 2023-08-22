//1 Count the occurrences of a value in an array — create a function that takes 2 args: arr, value — this function returns a number, that is count of number of times the value has appeared in arr

function valOccur(arr,val) {
    if(!arr.length) return -1;
    let count = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === val) count++;   
    // }

    // for (const num of arr) {
    //     if(num===val) count++;
    // }

    arr.forEach(element => {
        if (element === val) count++;
    });

    return count;
}



console.log(valOccur([12, 23, 34, 12, 67, 8], 12)); 