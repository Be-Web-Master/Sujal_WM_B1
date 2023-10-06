// Find the square root of a given number - do not use built in method
// const num = 16
// output - 4
// function getSqrt(num) - this function will return square root of a num

const num = 15;

function getSqrt(num){
    let sqrt = 0;
    for (let i = 1; i < num; i++) {
        if(i*i===num) return i;
    }
    return sqrt;
}

console.log(getSqrt(num));