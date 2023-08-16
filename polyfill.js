// function myMap(arr, callBack){
//     if(!arr || !Array.isArray(arr))
//         return new Error(`${callBack} is not a array`)
//     if(!callBack || typeof callBack !== 'function') 
//         return new Error(`${callBack} is not a function`)
//     const resultArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const arrElem = callBack(arr[i], i, arr);
//         resultArr.push(arrElem)
//     }
//     return resultArr
// }

// const callFunc = (el, idx, arr) => {
//     return el ** idx + arr.length;
// }

// console.log(myMap([1, 2, 3, 4, 5],callFunc))

// FILTER 

// function myFilter(arr, callBack) {
//     if (!arr || !Array.isArray(arr))
//         return new Error(`${callBack} is not a array`)
//     if (!callBack || typeof callBack !== 'function')
//         return new Error(`${callBack} is not a function`)
//     const resultArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const arrElem = callBack(arr[i], i, arr);
//         if(arrElem) resultArr.push(arr[i]);
//     }
//     return resultArr;
// }

// const callFunct = (el, idx, arr) => {
//     return el > 2
// }

// console.log(myFilter([1, 2, 3, 4, 5], callFunct))

// FOREACH

// function myForEach(arr, callBack) {
//     if (!arr || !Array.isArray(arr))
//         return new Error(`${callBack} is not a array`)
//     if (!callBack || typeof callBack !== 'function')
//         return new Error(`${callBack} is not a function`)
//     for (let i = 0; i < arr.length; i++) {
//         callBack(arr[i], i, arr);
//     }
// }

// const callFunc = (el) => {
//     console.log(el * 2)
// }

// myForEach([1, 2, 3, 4, 5], callFunc)

//REDUCE 

function myReduce(arr, callBack, init) {
    let accToBe, startIdx;
    if (init !== undefined){
        if(!arr.length) return init
        accToBe = init
        startIdx = 0
    }
    if(init === undefined && !arr.length) return new Error(`cannot run without initial value`)
    if (init === undefined && arr.length){
        accToBe = arr[0]
        startIdx = 1 
    }
    for (let i = startIdx; i < arr.length; i++) {
        accToBe = callBack(accToBe, arr[i], i, arr);
    }
    return accToBe
}

const callFunc = (accToBe, elemhcbh, startIdx, arr) => {
    accToBe + el;
}

console.log(myReduce([1, 2, 3, 4, 5], callFunc))
