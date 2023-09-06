class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        // If w or h is not a positive integer or is equal to 0, create an empty object
        return {};
      }
      
      this.width = w;
      this.height = h;
    }
  
    print() {
      if (Object.keys(this).length === 0) {
        // If the object is empty, don't print anything
        return;
      }
      
      const row = 'X'.repeat(this.width);
      for (let i = 0; i < this.height; i++) {
        console.log(row);
      }
    }
  
    rotate() {
      if (Object.keys(this).length === 0) {
        // If the object is empty, don't perform rotation
        return;
      }
  
      const temp = this.width;
      this.width = this.height;
      this.height = temp;
    }
  
    double() {
      if (Object.keys(this).length === 0) {
        // If the object is empty, don't perform doubling
        return;
      }
  
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;
  