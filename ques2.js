// Move multiple of 2 in left side and multiple of 3 on right side, the numbers which are divisible by both or not divisible by any of them should be removed from array.
// const arr = [9,4,6,2,7,12,14,21]
// num1 = 2
// num2 = 3
// output - [4,2,14,9,21]
// function findElemenetsDivisibleBy(arr. num1, num2) - this function will return array

const arr = [9,4,6,2,7,12,14,21] , num1 = 2, num2 = 3;


function findElemenetsDivisibleBy(arr, num1, num2){
    const arr1 = [], arr2 = [];
    arr.forEach(elem => {
        if (elem % num1 === 0 && elem % num2 !== 0) arr1.push(elem);
        else if (elem % num2 === 0 && elem % num1 !== 0) arr2.push(elem);
    });
    return arr1.concat(arr2);
}


console.log(findElemenetsDivisibleBy(arr, num1, num2));