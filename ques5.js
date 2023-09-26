//Move all negative numbers to beginning.
// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 - 13 - 5 - 7 - 3 - 6 11 6 5


const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]


function moveNegativeNums(arr) {
    const arr1=[], arr2=[];
    for (let i = 0; i < arr.length; i++) {
        (arr[i]<0) ? arr1.push(arr[i]): arr2.push(arr[i])
        // console.log(arr);
        // if(arr[i-1]>0){
        //     const temp = arr[i-1];
        //     arr[i-1] = arr[i]
        //     arr[i] = temp;
        // }
    }

    return arr1.concat(arr2);
}

// console.log(arr);
console.log(moveNegativeNums(arr));