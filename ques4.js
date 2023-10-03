// Sort array of objects with the name key
// const arr = [{ name:"cde", age:12 }, { name:"abc", age:21 }, { name:"aaa", age:31 }, { name:"bcd", age:11 }]
// function sortWithName(arr) - this function will return sorted array
// output - [{ name:"aaa", age:31 }, { name:"abc", age:21 }, { name:"bcd", age:11 }, { name:"cde", age:12 }]

const arr = [{ name:"cde", age:12 }, { name:"abc", age:21 }, { name:"aaa", age:31 }, { name:"bcd", age:11 }]


function sortWithName(arr) {
    const temp = [], result = [];
    for(const elem of arr){
        temp.push(elem.name);
    }
    temp.sort();
    console.log(temp);
    // for (let i = 0; i < temp; i++) {
    //     res
    // }
}

sortWithName(arr)