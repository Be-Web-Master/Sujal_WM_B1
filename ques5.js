//Create an array of numbers in the given range
// — create a function that takes 3 args: startNum, endNum, steps
// — this function returns an array which has numbers from startNum, to endNum in steps.

function arrGenerate(startNum, endNum, steps) {
    const arr = [];
    for (let i = startNum; i <= endNum; i = i + steps){
        arr.push(i);
    }
    return arr
}

console.log(arrGenerate(12,21,2));