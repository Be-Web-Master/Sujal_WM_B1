// Write a function to remove all the numbers which divides the given number
// const arr = [2,3,5,6,7,9]
// const num = 60
// function removeAllDivisibleNumbers(arr) - this function will return array of numbers which cannot divide given number
// output - [7,9]

const arr = [2,3,5,6,7,9]
const num = 60
function removeAllDivisibleNumbers(arr, num){
    const result = [];
    for (let i = 0; i< arr.length; i++) {
       if(num%arr[i]!==0) result.push(arr[i])
    }
    return result;
}

console.log(removeAllDivisibleNumbers(arr,num));
