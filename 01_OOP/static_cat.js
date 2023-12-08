class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static meow() {
    console.log("THIS IS: ", this);
  }

  static species = "felis catus";
}
