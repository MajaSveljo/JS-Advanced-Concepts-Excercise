class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName () {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName (newFullName) {
        const [first, last] = newFullName.split(' ')
        this.firstName = first
        this.lastName = last
    }
}

class Circle {
    #radious;

    constructor(radious) {
        this.#radious = radious
    }

    getRadious() {
        return this.#radious
    }
}

const myCircle = new Circle(10)
// this will work in devtools, but it doesn't really work in a program
// console.log(myCircle.#radious)

class MyClass {
    #privateMethod() {
        console.log("Private method called")
    }

    publicMethod() {
        this.#privateMethod();
    }
}

const myClass = new MyClass();
myClass.publicMethod();

// static initialization blocks
class MyClassStatic {
    static {
        console.log('class is loaded')
    }
}