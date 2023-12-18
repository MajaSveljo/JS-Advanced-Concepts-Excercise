class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  superGreet() {
    console.log(`#1: I am ${this.firstName}`); // works

    setTimeout(function () {
      console.log("THIS IS: ", this);
      console.log(`#2 I am ${this.firstName}`); // uh oh
    }, 500);

    setTimeout(() => {
      console.log("THIS IS: ", this);
      console.log(`#3 I am ${this.firstName}`); // yay!
    }, 1000);
  }
}

let kitty = new Cat("Kitty");
kitty.superGreet();
