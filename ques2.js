// Find the greatest dublicate number among dublicates
// function findMaxDublicate(arr) - this function will return the max dublicate number of an array
// const arr = [11,1,12,2,5,5,12,5,6,11,14,11]
// output - 11 - 11 is dublicate and the biggest number among all dublicates


const arr = [11,1,12,12,5,5,6,11,14,11]

function findMaxDublicate(arr){
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if(map.get(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }
        else {
            map.set(arr[i],1)
        }
    }
    let max = 0, num = 0;
    for (const [key , value] of map.entries()) {
        if(max<=value && num<key){
            max = value;
            num = key;
        }
    }
    
    return num;
}

console.log(findMaxDublicate(arr))