// square.js

const BaseSquare = require('./5-square'); // Import the base Square class

class Square extends BaseSquare {
  constructor(size) {
    super(size); // Call the constructor of the base class (BaseSquare)
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X'; // Use 'X' as the default character
    }

    for (let i = 0; i < this.size; i++) {
      console.log(c.repeat(this.size));
    }
  }
}

module.exports = Square;
