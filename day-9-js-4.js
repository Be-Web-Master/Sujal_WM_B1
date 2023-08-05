// IIFE: expression

(function (a) {
    console.log("iife", a)
})(10)


class user {
    constructor(name) {
        this.name = name
    }
    funcmeth() {
        
    }

    arrowmeth = () => {}
}

const user1 = new user()
user1.funcmeth()
user1.arrowmeth()