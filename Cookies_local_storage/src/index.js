function setCookies() {
  const firstnameValue = document.getElementById("firstname").value;
  const emailValue = document.getElementById("email").value;

  if (firstnameValue && emailValue) {
    
    document.cookie = `firstname=${firstnameValue}`;
    document.cookie = `email=${emailValue}`;
    
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
