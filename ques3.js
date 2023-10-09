// Find the max sum of left and right neighbour and return the mid element index
// const arr = [5,12,3,4,6,11,2,1]
// output - 2
// function getMaxSumNeighbourIndex(arr)
// explanation - 5 has only 12 as a neighbour so sum will be 0 + 12 = 12
// 12 has 2 neighbours 5 and 3 so sum will be 8
// 3 has 2 neighbours 12 and 4 so sum will be 16
// and so on..
// 16 is the maximum sum on index 2 which has number 3 and neighbours are 12 and 4


const arr = [5,12,3,4,6,11,2,1]


function getMaxSumNeighbourIndex(arr){
    let sum = 0; idx = 0, max = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = (arr[i-2]??=0) + (arr[i]??=0);
        if(sum>max){
            max = sum;
            idx = i-1;
        }
    }
    return idx;
}

console.log((getMaxSumNeighbourIndex(arr)));