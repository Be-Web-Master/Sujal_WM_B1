//Modify an array of numbers using the forEach loop to double each value in place.

let arr = [13,32,4,6,7,766,67];
let i = 0;
arr.forEach(element => {
    arr[i] = arr[i]**2;
    i++;
});

console.log(arr);