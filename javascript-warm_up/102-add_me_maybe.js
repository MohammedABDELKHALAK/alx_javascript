#!/usr/bin/node

// Define the addMeMaybe function
function addMeMaybe(number, theFunction) {
    number++;
    theFunction(number);
  }
  
  // Export the addMeMaybe function to make it visible from outside
  module.exports.addMeMaybe = addMeMaybe;
  