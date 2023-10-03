// Write a function to find the sum of all the non-repeating elements
// const arr = [1,1,2,4,5,5,3]
// function getUniqueNumberSum(arr) - this function will return sum of all unique numbers
// output - 2 + 4 + 3 = 9

const arr = [1,1,2,4,5,5,3]


function getUniqueNumberSum(arr){
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if(map.get(arr[i])) {
            map.set(arr[i], map.get(arr[i])+1)
        }
        else map.set(arr[i], 1);
    }
    let sum = 0;
    for (const [key, value] of map.entries()) {
        if(value===1) sum+=key;
    }
    return sum;
}

console.log(getUniqueNumberSum(arr));