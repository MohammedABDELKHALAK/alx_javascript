let messageParagraph; // Reference to the dynamically created message paragraph

function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (name.trim() === "" || email.trim() === "" || !emailRegex.test(email)) {
    if (!messageParagraph) {
      // Create a new paragraph for the message
      messageParagraph = document.createElement("p");

      document.body.appendChild(messageParagraph);
    }

    messageParagraph.textContent = "Please fill in all fields.";
    messageParagraph.style.color = "red";
  } else {
    if (!messageParagraph) {
      // Create a new paragraph for the message
      messageParagraph = document.createElement("p");

      document.body.appendChild(messageParagraph);
    }

    messageParagraph.textContent = "Form submitted successfully!";
    messageParagraph.style.color = "green";
  }
}

const form = document.getElementById("submitForm");
form.addEventListener("submit", handleFormSubmit);
