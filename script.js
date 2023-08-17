//Question: You are building a basic calculator app. Create a function calculateCircleArea(radius) that takes a radius as a parameter and calculates the area of a circle. Ensure that the calculated area is rounded to two decimal places. Test your function with a radius of 5 and print the result.

// function calculateCircleArea(rad) {
//     const area = Math.PI * rad**2;
//     return Math.round(area);
// }

// function calculateCircleArea(rad) {
//     const area = Math.PI * rad**2;
//     return area.toFixed(2);
// }

// (calculateCircleArea(5));


//Question: You are developing a statistics application. Create a function calculateMeanAndMedian(numbers) that takes an array of numbers as input and calculates both the mean and median of the numbers. Implement the median calculation in a way that works for both odd and even-length arrays. Test your function with the array [3, 1, 4, 1, 5, 9, 2, 6, 5] and print the mean and median.


// function calculateMeanAndMedian(arr) {
//     let sum = 0, mean = 0, med = 0;
//     if (arr.length % 2 !== 0) med = arr[Math.round((arr.length + 1) / 2)];
//     else {
//         med = Math.round(arr[Math.round(arr.length / 2)] + arr[Math.round((arr.length + 1) / 2)] / 2);
//     }
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     mean = sum / arr.length;
//     return { mean, med}
// }
// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// console.log(calculateMeanAndMedian(arr));


//Question: You are managing a student database. Create a Map called studentGrades where the keys are student names (strings) and the values are their corresponding grades (numbers). Add three student records: “Alice” got 85, “Bob” got 92, and “Charlie” got 78. Print the grade of “Bob”.


// const myMap = new Map([
//     ["alice", 85],
//     ["bob", 92],
//     ["charlie", 78]
// ]);

// console.log(myMap.get("bob"));

//Question: You are building a chat application. Create a Map called userMessages where keys are user objects and values are arrays of messages sent by each user. Implement a function sendMessage(user, message) that adds a new message to the user’s array of messages. Also, implement a function getTotalMessages(user) that returns the total number of messages sent by a user.



const obj = {
    user1 : [],

}
const userMessages = new Map();

function createUser(obj) {
    Object.defineProperty(obj, 'user2', {
        value: [],
        writable: true,
    });
}

createUser(obj);
console.log(obj);
