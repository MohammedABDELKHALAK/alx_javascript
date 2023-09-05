#!/usr/bin/node

const incrementAndCall = require('./102-external').incrementAndCall;

function myFunction(number) {
  console.log('Incremented number:', number);
}

// Call the incrementAndCall function
incrementAndCall(5, myFunction);
