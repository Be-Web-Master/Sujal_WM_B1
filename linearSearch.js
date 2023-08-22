function linearSearch(arr,val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}
const arr = [12,13,141,51,617]
console.log(linearSearch(arr, 51));