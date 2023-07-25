class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getters for width and height
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  // Method to calculate the area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(sideLength) {
    // Since Square is a subclass of Rectangle, we call the parent class constructor using super
    super(sideLength, sideLength);
  }

  // Method to calculate the perimeter of the square
  getPerimeter() {
    return 4 * this.width;
  }
}

// Creating an instance of Rectangle and Square
const rectangle = new Rectangle(5, 8);
const square = new Square(6);

// Using getters and methods
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 8
console.log(rectangle.getArea()); // Output: 40

console.log(square.width); // Output: 6
console.log(square.height); // Output: 6
console.log(square.getArea()); // Output: 36
console.log(square.getPerimeter()); // Output: 24
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
