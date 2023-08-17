let arr = ['iterate', 'through', 'an', 'array', 'of'];

for (let i = 0; i < arr.length; i++) {
    let str = "" + arr[i].charAt(0);
    str = str.replace(str.toLowerCase(),str.toUpperCase());
    arr[i] = arr[i].replace(arr[i].charAt(0),str)
}

console.log(arr);