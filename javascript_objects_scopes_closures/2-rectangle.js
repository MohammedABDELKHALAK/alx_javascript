#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
 // If w or h is <= 0 or not a positive integer, set the toString method
          return 'Rectangle {}';
        } 
        else if(w === undefined || h === undefined){
          return {};
        }
      else {
                this.width = w;
                this.height = h;
            }
            }
        }
        
        module.exports = Rectangle;