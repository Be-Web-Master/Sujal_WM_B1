function evenSum(len) {
    const arr = []
    for (let i = 1; i <= len; i++) {
        arr.push(i);
    }
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]%2===0) sum += arr[i];
    }
    console.log(sum);
}

// evenSum(25);