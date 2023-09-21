function setCookies() {
    const firstnameValue = document.getElementById("firstname").value;
    const emailValue = document.getElementById("email").value;

    if (firstnameValue && emailValue) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 10); // Set expiration to 10 days from now
      //expirationDate.setTime(expirationDate.getTime()  + (10 * 1000)); // Set expiration to 10 days from now

      document.cookie = `firstname=${firstnameValue}; expires=${expirationDate.toUTCString()}; path=/2-index.html`;
      document.cookie = `email=${emailValue}; expires=${expirationDate.toUTCString()}; path=/2-index.html`;

      alert("Cookies set successfully!");
    } else {
      alert("Please provide both First Name and Email.");
    }
  }

  function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split("; ");

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }

    return "";
  }

  function showCookies() {
    const firstnameValue = getCookie('firstname');
    const emailValue = getCookie('email');

    const cookiesParagraph = document.createElement("p");
    const cookiesInfo = `Email: ${emailValue} - Firstname: ${firstnameValue}`;
    cookiesParagraph.textContent = cookiesInfo;
    //cookiesContainer.innerHTML = "";
    cookiesContainer.appendChild(cookiesParagraph);
  }
