//Write a program that prints the numbers from 1 to 50. But for multiples of three, print “Fizz” instead of the number, and for the multiples of five, print “Buzz”. For numbers which are multiples of both three and five, print “FizzBuzz”

function fizzBuzz(len) {
    const arr = [];
    for (let i = 1; i <= len; i++) {
        arr.push(i)
    }
    for (let i = 0; i < len; i++) {
        if (arr[i]%3==0) console.log("fizz");
        else if (arr[i] % 5 == 0) console.log("buzz");
        else if (arr[i] % 5 == 0 && arr[i] % 3 == 0) console.log("Fizzbuzz");
        else console.log(arr[i]);
    }
}

fizzBuzz(30)