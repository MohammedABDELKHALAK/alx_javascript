function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    return emailRegex.test(email);
  }

  function validateForm(event) {
    event.preventDefault();  // Prevent form submission to allow validation

    const input_email = document.getElementById('email').value;
    const errorElement = document.getElementById('error');
    const isValidEmail = validateEmail(input_email);

    if (isValidEmail) {
      errorElement.textContent = 'successful format email';  // Clear any previous error messages
      // TODO: Submit the form
    } else {
      errorElement.textContent = 'Please enter a valid email address.';
    }
  }
  