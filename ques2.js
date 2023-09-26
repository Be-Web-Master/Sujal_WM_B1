//"2. Create a function to check if all the elements in the array is divisible by given num
// const arr = [2, 4, 6, 7]
// const num = 2;
// function getDivisibleNumbers(arr, num) - this function will return array of all elements completely divisible by num

const arr = [2, 4, 6, 7]
const num = 2;

function getDivisibleNumbers(arr, num){
   const result = arr.filter((elem)=>{
        if(elem%num===0) return elem;
    })
   return result; 
}

console.log(getDivisibleNumbers(arr,num));