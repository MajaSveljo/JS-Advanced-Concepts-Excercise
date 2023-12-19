function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return `${this.name} says woof!`;
};

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping!`;
};

// const myObj = {
//   color: "purple",
//   score: 99,
//   greet() {
//     console.log("HIII!");
//   },
// };

// class Dog {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }
//   bark() {
//     return `${this.name} says woof!`;
//   }
//   sleep() {
//     return `${this.name} is sleeping!`;
//   }
// }

// class GuideDog extends Dog {
//   constructor(name, breed, owner) {
//     super(name, breed);
//     this.owner = owner;
//   }
//   alert() {
//     return `${this.name} alerts you to danger.  Good dog!`;
//   }
// }

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
//   this.bark = function () {
//     return `${this.name} says woof!`;
//   };
//   this.sleep = function () {
//     return `${this.name} is sleeping!`;
//   };
// }

// function User(username, email) {
//   this.username = username;
//   this.email = email;
//   this.isAdmin = false;
// }

// const grandparent = {
//   greet() {
//     return "HI THERE!!!";
//   },
// };

// const parent = {
//   color: "purple",
//   sing() {
//     return "LA LA LA";
//   },
//   __proto__: grandparent,
// };

// const child = {
//   num: 2,
//   __proto__: parent,
// };

// const person = {
//   sing() {
//     return "LALALA";
//   },
//   isHuman: true,
// };
