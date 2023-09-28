// Find the union of arrays
// function findUnion(arr) - this function will return an array of all the elements existing in both arrays,
// const arr1 = [ 1,2,3,4,5 ]
// const arr2 = [2,2,3,4,5,5,6]
// output - [2,2,3,4,5,5]


const arr1 = [ 1,2,3,4,5 ]
const arr2 = [2,2,3,4,5,5,6]

function findUnion(arr1,arr2){
    const resultArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i]===arr2[j]) resultArr.push(arr1[i]);
        }
    }
    return resultArr;
}

console.log(findUnion(arr1,arr2));