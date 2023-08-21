//18. Count the number of vowels and consonants in a given string.

function countOfVowelsConsonants(str) {
    let vowels = 0, cons = 0, i = 0;
    while (i<str.length) {
        if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u' || str.charAt(i) === 'A' || str.charAt(i) === 'E' || str.charAt(i) === 'I' || str.charAt(i) === 'O' || str.charAt(i) === 'U') vowels++;
        else cons++;
        i++;
    }
    
    return console.log({vowels,cons});
}

countOfVowelsConsonants("qwertyuioasdfgASDFERTYhjk")