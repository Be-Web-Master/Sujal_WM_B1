// Swap Elements of array given index left
// const arr = [1,2,3,4,5,6]
// const swapLeftBy = 2
// output - [3,4,5,6,1,2]
// function getLeftSwappedArrayByIndex(arr, swapLeftBy) - this will return an swapped array with given index

const arr = [1,2,3,4,5,6]
const swapLeftBy = 2;

function getLeftSwappedArrayByIndex(arr,swapLeftBy) {
    for (let i = 0; i < arr.length-swapLeftBy; i++) {
        const temp = arr[i+swapLeftBy];
        arr[i+swapLeftBy] = arr[i];
        arr[i] = temp;
    }
    return arr
}

console.log(getLeftSwappedArrayByIndex(arr,swapLeftBy))