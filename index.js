const obj ={
    name : 'Darshit Sharma',
    rollNumber : 23,
    class : 9,
    section : 'A',
    gender : 'Male',
    country : 'India'
}

const obj1 = {
    name: 'Deepak',
    gender: 'Female'
}

const obj2 = {
    section: 'A',
    gender: 'Male'
}

const obj3 = {
    country: 'India'
}
// for (const key in obj) {
//     console.log(key)
// }
// console.log(Object.keys(obj));

// console.log(Object.values(obj));

// console.log(Object.entries(obj));

// const mergedObj = Object.assign(obj1,obj2,obj3);

// console.log(mergedObj);

const objWithProp1 = {
    name : 'sujal',
    surname : 'Gotharwal',
    printStudentDetail : function () {
        console.log(`My name is ${this.name} and my surname is ${this.surname}`)
    }

}

// const objWithProp2 = Object.create(objWithProp1)
// objWithProp2.age = 21
// objWithProp2.class = 'high'

// objWithProp2.printStudentDetail();

// 6
Object.defineProperty(objWithProp1,'age',{
    value : 21,
    writable : true
})
// console.log(objWithProp1.age)


// 7
Object.defineProperties(objWithProp1,{
    college : {
        value : 'SIRT',
        writable: true
    },
    grade : {
        value : 'A',
        writable: true
    }
})
// console.log(objWithProp1.college)

// 8

// Object.preventExtensions(objWithProp1)

Object.defineProperties(objWithProp1,{
    prop1 : {
        value: "property1 added",
        writable: true
    },
    prop2: {
        value: "property2 added",
        writable: false
    }
})
// objWithProp1.prop2 = "property 2 modified"
console.log(objWithProp1.prop2);








