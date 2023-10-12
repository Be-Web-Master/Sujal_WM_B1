// Write a function to find dublicates elements without using an set and map, do it O(n), do not use nested loops
// const arr = [1,1,2,3,4,4,4,5,6,6,7]
// output - [1,4,6]
// function getDublicates(arr) - this function will return array of dublicates in O(n)


const arr = [1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 7];

function getDublicates(arr){
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
    for (const [key] of Object.entries(obj)) {
        result[i++] = Number(key);
    }
    return result;
}

console.log(getDublicates(arr));
