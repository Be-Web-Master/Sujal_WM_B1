function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        let temp = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
            console.log(minIndex)
        }
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
        console.log(arr[minIndex])
    }
}

selectionSort(arr);
console.log(arr);