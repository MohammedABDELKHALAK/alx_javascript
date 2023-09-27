function validatePassword(password) {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;
  
    if (
      password.length < minLength ||
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !digitRegex.test(password) ||
      !specialCharRegex.test(password)
    ) {
      return false;
    }
  
    return true;
  }

  function validateForm(event) {
    event.preventDefault();  // Prevent form submission to allow validation

    const input_password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');
    const isValidPassword = validatePassword(input_password);

    if (isValidPassword) {
      errorElement.textContent = "You apply all password's roles  ";  // Clear any previous error messages
      // TODO: Submit the form
    } else {
      errorElement.textContent = 'Password does not meet the criteria.';
    }
  }
  