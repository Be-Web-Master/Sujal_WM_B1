//Use the for...of loop to iterate through an array of strings and concatenate them into a single sentence.

let arr = ['iterate', 'through', 'an', 'array', 'of'];
let string = "";
for (const str of arr) {
    string = string.concat(str);
}

console.log(string);