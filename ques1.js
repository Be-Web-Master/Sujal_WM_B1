//"1. Capitalize first letter of the string -> "webmaster" -> "Webmaster"."

function capitalizeTheFirstLetter(str) {
    const str1 = str.charAt(0).toUpperCase();
    const str2 = str.substring(1);
    return str1.concat(str2);
}

console.log(capitalizeTheFirstLetter("webmaster"));