// Find the factorial of a number
// function findFactorial(num) - this function will return factorial of a number
// const num = 5;
// output - 120
// const num = 3
// output - 6

const num = 3;

function findFactorial(num){
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    return fact;
}

console.log(findFactorial(num));
