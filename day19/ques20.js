//20. Write a program to reverse a given number.

function reversedNum(num) {
    let rev = 0, rem = 0;
    while(num!==0){ 
        rem = num % 10; 
        num = Math.floor(num / 10);
        rev = rev * 10 + rem
    }
    console.log(rev);
}

reversedNum(1234);