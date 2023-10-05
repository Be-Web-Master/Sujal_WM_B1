// Implement Bubble Sort
// const arr = [11,4,6,14,2,51,1]
// output - [1,2,4,6,11,14,51]
// function bubbleSort(arr) - this function will return sorted array


const arr = [11,4,6,14,2,51,1]

function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if(i!==j && arr[i]>arr[j]){
                const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
            }
        }
        console.log(arr);
    }
    return arr;
}

console.log(bubbleSort(arr));