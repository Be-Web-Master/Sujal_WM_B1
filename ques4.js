// Find string with given prefix - do not use built-in method
// function getStringByPrefix(arr) - this function will return all the string which have given prefix
// arr - [abc, bcd, bc, abcd, abb, acbds, ceab, abds]
// const prefix ="ab"
// output - [abc, abcd, abb, abds]


const arr = ["abc", "bcd", "bc", "abcd", "abb", "acbds", "ceab", "abds"]

function getStringByPrefix(arr){
    const prefix ="ab";
    const result =[];
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < prefix.length; j++) {
            if(arr[i].charAt(j)===prefix.charAt(j)) flag = true;
            else flag = false;
        }
        if(flag) result.push(arr[i])
    }
    return result;
}

console.log(getStringByPrefix(arr));