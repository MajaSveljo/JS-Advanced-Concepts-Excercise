class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
  getRadius() {
    return this.#radius;
  }
}

const myCircle = new Circle(10);
console.log(myCircle.#radius);
