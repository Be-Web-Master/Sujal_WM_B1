//Using a for and forEach loop, write a program that prints the squares of the numbers from 1 to 10.



//for
function arrayGenFor(len) {
    const arr = []
    for (let i = 1; i <= len; i++) {
        arr.push(i);
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] ** 2);
    }
}

//forEach

function arrayGenEach(len) {
    const arr = []
    for (let i = 1; i < len; i++) {
        arr.push(i);
    }
    arr.forEach((num) => {
        console.log(num ** 2);
    })
}


// while

function arrayGenWhile(len) {
    const arr = []
    for (let i = 1; i < len; i++) {
        arr.push(i);
    }
    let i = 0;
    while (i<len) {
        console.log(arr[i] ** 2)
        i++;
    }
}

// arrayGenFor(10);

