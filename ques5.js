// Reverse all the words of a string - do not use built-in method
// function reverseWords(string) - this function will return an string having reversed words
// const string - "webMaster is Best"
// output - "retsaMbew si tesB"


const string = "webMaster is Best"

function reverseWords(string){
    let newString ='';
    const words = string.split(" ");
    for (const word of words) {
        let temp ="";
        for(const char of word){
            temp = char + temp;
        }
        newString = newString + " " + temp;
    }
    return newString.trim();
}

console.log(reverseWords(string))