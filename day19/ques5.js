const person = {
    name : 'Sujal',
    age : 21,
    city : 'Bhopal'
}

// for (const data of Object.entries(person)) {
//     console.log(data);
// }

for (const data in person) {
    console.log(data,person[data]);
}