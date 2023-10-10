// Easy - Find the peak of the mountain
// const arr = [ 1,2,4,3,6,3,1 ]
// output - 6
// function getPeak(arr) - this function will return peak of the mountain, 6 is greater among all so 6 is the peak


const arr = [1, 2, 4, 3, 6, 3, 1];

function getPeak(arr){
    let max = 0;
    arr.forEach(elem => max = Math.max(elem,max));
    return max;
}

console.log(getPeak(arr));