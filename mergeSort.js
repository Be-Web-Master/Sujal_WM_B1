const arr = [[23], [13], [24], [14], [15]];

function mergeSort(arr) {
    let splitedArr = arr.map((num) => [num]);
    newArrSort(splitedArr);
    
    
}

function newArrSort(arr) {
    console.log(arr);
    let arrLast, len =arr.length;
    if(len%2!==0) {
        arrLast = arr[len-1];
        len -= 2;
    }
    let start = 0, end = 1, mergedArr = [];
    while(start<=len && end<=len){
        console.log({start,end});

        mergedArr.push(merging(arr[start],arr[end]));
        start+=2; end +=2;
    }
    if (len % 2 !== 0) {mergedArr.push(merging(mergedArr.flat(2),[arrLast]));}
    console.log({mergedArr});
}


function merging(arr1, arr2) {
    let len = 0, idx1 = 0, idx2 = 0, resultArr = []
    if (arr1.length > arr2.length) len = arr2.length;
    else len = arr1.length;

    for (let i = 0; i < len; i++) {
        if (arr1[idx1] > arr2[idx2]) {
            resultArr.push(arr2[idx2])
            if (arr2.length - 1 !== idx2) idx2++
            else resultArr.push(arr1.slice(idx1))
        }
        else {
            resultArr.push(arr1[idx1])
            if (arr1.length - 1 !== idx1) idx1++
            else resultArr.push(arr2.slice(idx2))
        }
    }
    console.log(resultArr.flat(1));
    return resultArr.flat(1);
}


newArrSort(arr);



// // console.log(arr);