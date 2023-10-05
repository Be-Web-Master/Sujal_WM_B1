// Find the elements the divides the sum of all elements
// const arr = [1,2,3,4,5]
// output - [1, 3, 5]
// function findDivisibleElements(arr) - this function will return the array of elements

const arr = [1,2,3,4,5];

function findDivisibleElements(arr){
    let sum = 0;
    arr.forEach(num => {sum+=num});
    const result = arr.filter((num)=>{
        if(sum%num===0) return num;
    })
    return result;
}

console.log(findDivisibleElements(arr));
