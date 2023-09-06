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
else {

    for (let i = 0; i < this.size; i++) {
        for(let j = 0; j< this.size; j++){
      console.log(c);
        }
    }
}
  }
}

module.exports = Square;
