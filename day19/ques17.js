//17. Write a function that takes a positive integer as input and returns the sum of its digits each raised to the power of the number of digits in the original integer.

function numberSum(num) {
    let sum = 0, rem = 0;
    while(num!=0){
        rem = num%10;
        num /= 10;
        sum += num**2;
    }
    return sum;
}

console.log(numberSum(123));  //152.81818181818184