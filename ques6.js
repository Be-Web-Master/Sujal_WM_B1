//Convert an array of objects to a single object of objects
// — create a function that takes 2 args: arran array of objects, keyName
// — this function returns an object: where value of one of the properties of the object is the key, and the entire object is the value.

const arr = [
    { id: "1", name: "Alpha", gender: "Male" },
    { id: "2", name: "Bravo", gender: "Male" },
    { id: "3", name: "Charlie", gender: "Female" }
]

let obj = { }
let i = 1;
for (const key of Object(arr)) {
    obj[i++] = key
    // console.log(obj);
}
console.log(obj);