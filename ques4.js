//Compare two Arrays (polyfill of Array.prototype.every)
// — create a function that takes 2 args: arr1, arr2
// — this function returns either true or false, if each element of both the arrays are equal with ===

function everyFunc(arr1,arr2) {
    if(arr1.length!==arr2.length) return false;
    
    // for (let i = 0; i < arr1.length; i++) {
    //     if(arr1[i]!==arr2[i]) return false;
    // }

    const isSame = arr1.reduce((acc,num,i)=>{
        if (num !== arr2[i]) return acc = false;
        if (acc !== false) return acc = true;
        else return acc = false;
    },true)

    return isSame;
}

console.log(everyFunc([1, 23, 34, 12, 7,8], [1, 23, 34, 12, 7, 8]));