//Given an array of names, use the forEach loop to print a greeting message for each name.

const arr = ["Ram", "Shyam", "Ganga", "Yamuna"];
const msg = "What's Up, ";
arr.forEach(element => {
    console.log(msg.concat(element));
});