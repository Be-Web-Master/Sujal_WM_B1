//22. Create a program that counts the occurrence of each character in a given string and displays the character count.
let str = "ABCQWERTYUASDFASDF";
function charCount(str) {
    const arr = [26]
    // console.log({ arr2: arr });
    for (let i = 0; i < 26; i++) {
        arr[i] = 0;
    }
    for (let i = 0; i < str.length; i++) {
        let value = 1;
        let char = str.charCodeAt(i);
        // console.log({ char });
        let index = char. - 65;
        // console.log({ index });
        arr[index] = arr[index] + value;
        // console.log({ arr });
        console.log(i, arr);
    }
    
}

charCount(str)