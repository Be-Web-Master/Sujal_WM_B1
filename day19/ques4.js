function factorial(count) {
    let i = 1, fact = 1;
    while (count>0) {
        fact *= i;
        i++; count--;
    }
    return fact
}

console.log(factorial(5));