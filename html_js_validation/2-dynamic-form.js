function generateInputFields() {
    const numFields = parseInt(document.getElementById('numFields').value);
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear any existing fields
  
    for (let i = 1; i <= numFields; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = `field${i}`;
      input.placeholder = `Field ${i}`;
      inputContainer.appendChild(input);
    }
  }
  
  
  function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const inputContainer = document.getElementById('inputContainer');
    const inputs = inputContainer.getElementsByTagName('input');
    const errorElement = document.getElementById('error');
  
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
        errorElement.textContent = 'Please fill in all fields.';
        return false; // Prevent form submission
      }
    }
  
    errorElement.textContent = ' all fields are fill'; // Clear any previous error messages
    return true; // Allow form submission
  }
  