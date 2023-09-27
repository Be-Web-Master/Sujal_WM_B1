// Count the frequency of each Character in a string
// const string = "WebMaster wEBmasTer Best"
// function getFrequency(string) - this function will return an object containing frequency of each character, lowercase and uppercase of a character considered as single character
// output
// { w : 2
// e : 5
// b : 3
// m : 2
// a : 2
// s : 3
// t : 3
// r : 2
// }

const string = "WebMaster wEBmasTer Best"

function getFrequency(string) {
    string = string.toLowerCase();
    const map = new Map();
    for (let i = 0; i < string.length; i++) {
        // console.log(string.charAt(i)===);
        if(string.charCodeAt(i)!==32){
            if(map.get(string.charAt(i))) {
            map.set(string.charAt(i), (map.get(string.charAt(i)) + 1))
            }
            else {
            map.set(string.charAt(i), 1);
            }
        }  
    }
    return Object.fromEntries(map);
}



console.log(getFrequency(string));