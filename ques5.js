// Implement Selection Sort - ascending order
// const arr = [11, 20, 3, 14, 50, 9]
// function selectionSort(arr) - this function will return array of sorted elements in ascending order
// output = [3,9,11,14,20,50]

const arr = [11, 20, 3, 14, 50, 9];

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if(i!==j && arr[i]>arr[j]){
                const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(selectionSort(arr));

