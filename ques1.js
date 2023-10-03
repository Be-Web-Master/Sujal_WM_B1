// Write a function to move all the negative numbers on the odd index and positive numbers on the even index, 0 considered as positive
// const arr = [-1,1,2,-2,3,4,-6,-7]
// function movePositiveAndNegativeNumbers(arr)
// output - [1,-1,2,-2,3,-6,4,-7]


const arr = [-1,1,2,-2,3,4,-6,-7]
function movePositiveAndNegativeNumbers(arr){
    let result = [], oddIdx = 1, evenIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>=0) {
            result[evenIdx]= arr[i];
            evenIdx+=2;
        }
        else {
            result[oddIdx] = arr[i];
            oddIdx+=2;
        }
    }
    return result;
}

console.log(movePositiveAndNegativeNumbers(arr));