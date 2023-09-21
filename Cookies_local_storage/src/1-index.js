
function setCookies() {
    const firstnameValue = document.getElementById("firstname").value;
    const emailValue = document.getElementById("email").value;
  
  
    ;
  
    if (firstnameValue && emailValue) {
      const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 10); // Set expiration to 10 days from now
            //expirationDate.setTime(expirationDate.getTime()  + (10 * 1000)); // Set expiration to 10 days from now
  
      document.cookie = `firstname=${firstnameValue}; expires=${expirationDate.toUTCString()}; path=/1-index.html`;
      document.cookie = `email=${emailValue}; expires=${expirationDate.toUTCString()}; path=/1-index.html`;
      
      alert("Cookies set successfully!");
      
    } else {
      alert("Please provide both First Name and Email.");
      
    }
  }
  
  
  function showCookies() {
    const cookiesParagraph = document.createElement("p");
    const cookiesInfo = `${document.cookie}`;
    cookiesParagraph.textContent = cookiesInfo;
  //cookiesContainer.innerHTML = "";
    cookiesContainer.appendChild(cookiesParagraph);
    
  }
  