// // Implement Binary Search
// constraint - given array will be sorted always
// function binarySearch(arr, num) - this function will return the index of the element if found, if not found return -1

const arr = [3, 5, 7, 8, 11, 41, 52];
const num = 8;

function binarySearch(arr, num){
    let start = arr[0],
      end = arr[arr.length - 1],
      mid = arr[Math.ceil((arr.length - 1)/2)];
      console.log(mid);
    for (let i = 0; i < arr.length; i++) {
        if(num===start) return num;
        else if(num===end) return num;
        else if (num!== start) 
    }
}

console.log(binarySearch(arr,num));