//22. Create a program that counts the occurrence of each character in a given string and displays the character count.

let str = "ABCQABCQWDWDF";
function charCount(str) {
    const arr = [26]
    const obj = { }
    for (let i = 0; i < 26; i++) {
        arr[i] = 0;
    }
    for (let i = 0; i < str.length; i++) {
        let value = 1;
        let char = str.charCodeAt(i);
        let index = char - 65;
        arr[index] = arr[index] + value;
        obj[String.fromCharCode(char)] = arr[index];    
    }
    console.log(obj);
}

charCount(str)