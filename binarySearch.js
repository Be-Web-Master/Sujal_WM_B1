const arr = [12, 13, 14, 20, 22, 25, 27]


function binarySearch(arr, val) {
    let start = 0, end = arr.length - 1, mid = Math.floor((start + end) / 2);
    while(start < end){
        if(arr[mid] === val) return mid;
        if(arr[mid] < val) start = mid + 1;
        else end = mid;
        mid = Math.floor((start + end) / 2);
    }
    return -1;
}

console.log(binarySearch(arr,25));