//4 Create a function to remove dublicate elements
// const arr = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6, 5]
// function removeDublicates(arr) -> return an array of unique elements - [1, 2, 3, 4, 5, 6]

const arr = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6, 5]

function removeDublicates(arr) {
    const mySet = new Set();
    arr.forEach(element => {
        mySet.add(element);
    });
    return mySet;
}

console.log(removeDublicates(arr));