//"1. Create a function to check if the string contains any vowel
// const string = "qwrtyp"
// function isContainsVowel(string) - complete this function if contains vowel return true otherwise false


function isContainsVowel(string) {
    const str = string.toLowerCase();
    for (const alpha of str) {
        if (alpha === "a" || alpha === "e" || alpha === "i" || alpha === "o" || alpha === "u" ) return true;
    }
    return false;
}

console.log(isContainsVowel("ghsdf"));