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