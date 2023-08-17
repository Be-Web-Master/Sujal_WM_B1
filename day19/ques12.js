//Implement a function that uses the reduce method to calculate the sum of all elements in an array


function sum(len) {
    const arr = [];
    for (let i = 1; i <= len; i++){
       arr.push(i)
    }
    const init = 0;
    const totalSum = arr.reduce((acc, curr) => acc + curr, init);

    console.log({arr,totalSum});
}

sum(5);