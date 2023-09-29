// Find the average score of a player.
// function getAverage(arr) - this function will return average score of a player
// arr - an array contains the balls played by the player and the runs, this array also include "wide" ball or "Wide" ball, you don't have to include this ball in players score
// the index of the array is a ball
// and the value at the index are the runs

// const arr = [4,2,1,4,6,"wide",4,2,4,"Wide", 4,6,"wide",6,6]
// output - 4.083s


const arr = [4,2,1,4,6,"wide",4,2,4,"Wide", 4,6,"wide",6,6]

function getAverage(arr){
    let sum = 0, num = 0;
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] !== "string"){
            sum += arr[i];
            num++;
        }
    }
    return (sum/num).toFixed(3);
}

console.log(getAverage(arr))