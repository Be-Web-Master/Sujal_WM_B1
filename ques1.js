// Find the objects with satisfy below conditions
// name should start with A or B
// age should be less than 25
// const arr = [ { name:"bca", age:21 }, { name:"ba", age:25 }, { name:"aa", age:12 },{ name:"da", age:21 }, { name:"Ab", age:26 },{ name:"Aa", age:21 } ]
// output - [ { name:"bca", age:21 }, { name:"aa", age:12 },{ name:"Aa", age:21 } ]
// function getEligibleMembers(arr) - this function will return an array with the satisfied conditions

const arr = [
  { name: "bca", age: 21 },
  { name: "ba", age: 25 },
  { name: "aa", age: 12 },
  { name: "da", age: 21 },
  { name: "Ab", age: 26 },
  { name: "Aa", age: 21 },
];
function getEligibleMembers(arr) {
  const result = [];
  arr.forEach((elem) => {
    const char = elem.name.toLowerCase().charAt(0);
    if ((char === "a" || char === "b") && elem.age < 25) result.push(elem);
  });
  return result;
}

console.log(getEligibleMembers(arr));
