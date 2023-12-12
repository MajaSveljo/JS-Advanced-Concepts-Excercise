class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);

  constructor(radius, color) {
    this._radius = radius;
    this.setColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("That color is not allowed");
    }
  }

  get radius() {
    return this._radius;
  }

  // Setter for the radius
  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this.setColor(newColor);
  }
}
