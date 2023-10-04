// Find the string which have most vowels in it.
// const arr = ["ap", "aeioUtt", "qAeIoUar", "art"]
// output - qAeIoUar
// function findMostVowelString(arr) - this function will return an string with the most vowels


const arr = ["ap", "aeioUtt", "qAeIoUar", "art"];


function findMostVowelString(arr){
    let str = '', max = 0;
    arr.forEach(string => {
        let count = 0;
        for (const char of string.toLowerCase()) {
          if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
          ) {
            count++;
          }
        }
        if(count > max){
            max = count;
            str = string;
        }
    });

    return str;
}

console.log(findMostVowelString(arr));