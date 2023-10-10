// Easy - Flat the array - do not use built in method
// const arr = [ [1, 2], [3,4], [5,6] ]
// output - [1,2,3,4,5,6]
// function flatArray(arr) - this function will return flatten array

const arr = [ [1, 2], [3,4], [5,6] ];


function flatArray(arr){
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);   
        }
    }
    return result;
}

console.log(flatArray(arr));

