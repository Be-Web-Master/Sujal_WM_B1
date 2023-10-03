// Write a function to get the pair which have maximum sum
// const arr = [2,3,11,5,7,9]
// function getMaxPair(arr) - this function will return the pairs which have maxium sum
// output - [11, 9]
// 11 + 9 = 20 are the pairs which have maximum sum

const arr = [2,3,11,5,7,9]

function getMaxPair(arr){
    arr.sort((a,b)=>a-b)
    console.log(arr);
    return [arr[arr.length-1], arr[arr.length-2]]
}

console.log(getMaxPair(arr));