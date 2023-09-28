// Find the majority element in the array
// function findMajorityElement(arr) - this function will return first majority element from an array
// const arr= [3, 3, 4, 2, 4, 4, 2, 4, 4]
// output - 4

// const arr = [1,1,1,3,3,3,2,2]
// output - 1

// const arr= [3, 3, 4, 2, 4, 4, 2, 4, 4]

const arr = [1,1,1,3,3,3,2,2]

function findMajorityElement(arr){
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i])) {
            map.set(arr[i], map.get(arr[i])+1)
        } else {
            map.set(arr[i], 1)
        }  
    }

    let max = 0, ans = 0;
    for (const [key , value ] of map.entries()) {
        if(value>max) {
            max = value;
            ans = key
        }
    }
    return ans;
}

console.log(findMajorityElement(arr))