// Write a polyfill of map (same function which works as array map does)

function mapArr(arr,callBack=()=>{}) {
    const resultArr = []
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(callBack(arr[i],i,arr));
    }
    return resultArr;
}

function callBack(elem,idx,arr) {
    return elem + 1;
}

console.log(mapArr([1,2,3,4,5],(ele)=>ele+5));

