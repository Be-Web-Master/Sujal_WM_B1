// Write a function to find dublicates elements without using an set and map, do it O(n), do not use nested loops
// const arr = [1,1,2,3,4,4,4,5,6,6,7]
// output - [1,4,6]
// function getDublicates(arr) - this function will return array of dublicates in O(n)


const arr = [1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 7];

function getDublicates(arr){
    const obj = {}, result = [];
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]){
            obj[arr[i]] = obj[arr[i]] + 1;
           if (obj[arr[i]]===2) result[idx++] = arr[i];   // uncomment this or the below are working
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    // for (const [key,value] of Object.entries(obj)) {
    //    if(value>1) result[i++] = Number(key);
    // }
    return result;
}

console.log(getDublicates(arr));
