// Write a function to find unique elements without using an set and map, do it O(n), do not use nested loops
// const arr = [1,1,2,3,4,4,4,5,6,6,7]
// output - [2,3,5,7]
// function getUniqueNumbers(arr) - this function will return array of unique numbers in O(n)

const arr = [1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 7];


function getUniqueNumbers(arr){
    const obj = {}, result = [];
    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]){
            obj[arr[i]] = obj[arr[i]] + 1;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    let i = 0;
    for (const [key,value] of Object.entries(obj)) {
       if(value===1) result[i++] = Number(key);
    }
    return result;
}

console.log(getUniqueNumbers(arr));