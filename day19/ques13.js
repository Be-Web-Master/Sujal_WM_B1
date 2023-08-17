// Write a program that finds the maximum value in an array of numbers using the reduce method.

function maxNum(len) {
    const arr = [];
    for (let i = 1; i <= len; i++) {
        arr.push(i)
    }
    const totalSum = arr.reduce((max, num) => {
        if(num>max) max = num
            return max
        });

    console.log({ arr, totalSum });
}

maxNum(10)
