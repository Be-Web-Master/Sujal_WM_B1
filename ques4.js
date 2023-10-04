// Sort array of objects with the name key
// const arr = [{ name:"cde", age:12 }, { name:"abc", age:21 }, { name:"aaa", age:31 }, { name:"bcd", age:11 }]
// function sortWithName(arr) - this function will return sorted array
// output - [{ name:"aaa", age:31 }, { name:"abc", age:21 }, { name:"bcd", age:11 }, { name:"cde", age:12 }]

const arr = [{ name:"cde", age:12 }, { name:"abc", age:21 }, { name:"aaa", age:31 }, { name:"bcd", age:11 }]


function sortWithName(arr) {
   arr.sort((obj1,obj2)=>{
        if( obj1.name>obj2.name) return 1;
        else return -1;
   })
   return arr;
}

console.log(sortWithName(arr));