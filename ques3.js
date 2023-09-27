//Reverse words in a string
// const string = "WebMaster Batch One"
// output - "One Batch WebMaster"
// function getReversedWords(string) - this function will return string of the reversed words

const string = "WebMaster Batch One";

function getReversedWords(string) {
    const words = string.split(" ");
    let reversedWords = "";
    words.forEach(word => {
        reversedWords = word + " " + reversedWords;
    });
    return reversedWords.trim();
}

console.log(getReversedWords(string))