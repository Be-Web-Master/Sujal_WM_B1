const arr = [1,2,3,4,5,6,7,8,9,0]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let num of arr) {
    console.log(num);
}

let obj = { a:1, b:2, c:3}

for (let key in obj) {
    console.log(key);
}