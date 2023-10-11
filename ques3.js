// Write polyfill of filter (same function which works as array filter does)


function filterArr(arr, callBack = () => {}) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    const temp = callBack(arr[i]);
   if(temp!==undefined && temp!== null) resultArr.push(temp);
  }
  return resultArr;
}

function callBack(elem, idx, arr) {
  if(elem>3) return elem;
}

console.log(filterArr([1, 2, 3, 4, 5], callBack));
