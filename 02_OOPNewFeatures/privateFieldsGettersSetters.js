class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
  get radius() {
    return this.#radius;
  }

  set radius(newVal) {
    if (newVal < 0) {
      throw new Error("Radius cannot be negative!");
    }
    this.#radius = newVal;
  }
}

const myCircle = new Circle(10);
myCircle.radius = -99;
console.log(myCircle.radius);
