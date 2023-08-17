//Write a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter method.

const arr = [12,23,34,334,45,567,68];

const newArr = arr.filter((num)=> {
    let isPrime = true;
    for (let i = 2; i <= num/2; i++) {
        if (num%i===0) {
            isPrime = false;
        }     
    }
    if(isPrime) return num;
})

console.log(newArr);