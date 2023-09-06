const Rectangle = require('./4-rectangle'); // Import the Rectangle class from rectangle.js

class Square extends Rectangle {
    constructor(size) {
      // Call the constructor of the base class (Rectangle) using super()
      super(size, size);
    }
  }
  
  module.exports = Square;