class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `Area is ${this.getArea()}.`;
  }
}

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b);
    this.color = color;
  }
}

class ColorMoodTriangle extends ColorTriangle {
  constructor(a, b, color, mood) {
    super(a, b, color);
    this.mood = mood;
  }
}
