function welcome(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
  
    function displayFullName() {
      alert('Welcome ' + fullName + '!');
    }
  
    displayFullName();
  }
  
  // Test the function
  welcome('Holberton', 'School');
  