//Filter an array of book objects, keeping only the books with a rating greater than 4.

const arr = [{ book: "Maths", rating: 4 }, { book: "physics", rating: 5 }, { book: "chem", rating: 6 }, { book: "Eng", rating: 2 }, { book: "Hindi", rating: 10 }];

const newArr = arr.filter((ele) =>  ele.rating > 4 )

for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i].book);
}
