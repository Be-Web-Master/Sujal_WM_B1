function fibonacci(count) {
    let a = 0, b = 1, c = 0, arr = [0,1];
    for (let i = 2; i <= count; i++) {
        c = a + b;
        arr.push(c);
        a = b
        b = c
    }
    console.log(arr);
}

fibonacci(10);