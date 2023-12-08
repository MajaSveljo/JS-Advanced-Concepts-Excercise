class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static registerStray() {
    const names = [
      "Muffin",
      "Biscuit",
      "Sleepy",
      "Dodo",
      "Princess Butterface",
    ];
    const name = choice(names);
    return new Cat(name, "unknown");
  }
  meow() {
    return `${this.name} says meow`;
  }
}

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}
