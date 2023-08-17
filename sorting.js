// const arr = [12, 23, 13, 24, 14, 15, 36, 11, 87, 31];

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i
//         let temp = arr[i]
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) minIndex = j;
//             console.log(minIndex)
//         }
//         arr[i] = arr[minIndex]
//         arr[minIndex] = temp
//         console.log(arr[minIndex])
//     }
// }

// function insertionSort(arr) {
//     console.log(arr)
//     for (let i = 1; i < arr.length; i++) {
//         let curr = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > curr) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = curr;
//         console.log(arr[j + 1])
//     }
// }


function merging(arr1, arr2) {
    let len = 0, idx1 = 0, idx2 = 0, resultArr = []
    if (arr1.length > arr2.length) len = arr2.length;
    else len = arr1.length;

    for (let i = 0; i < len; i++) {
        if (arr1[idx1] > arr2[idx2]) {
            resultArr.push(arr2[idx2])
            if (arr2.length - 1 !== idx2) idx2++
            else resultArr.push(arr1.slice(idx1))
        }
        else {
            resultArr.push(arr1[idx1])
            if (arr1.length - 1 !== idx1) idx1++
            else resultArr.push(arr2.slice(idx2))
        }
    }
    return resultArr;
}


console.log(merging([1, 5, 7], [15, 27, 38, 54]));



// console.log(arr);