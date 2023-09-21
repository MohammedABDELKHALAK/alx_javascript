let loggedIn = false;

function setCookie() {
  const firstnameValue = document.getElementById('firstnameInput').value;
  const emailValue = document.getElementById('emailInput').value;

  document.cookie = `firstname=${firstnameValue}`;
  document.cookie = `email=${emailValue}`;

  showWelcomeMessageOrForm();
}

function showForm() {
  const welcomeMessage = document.querySelector('h1');
  const loginForm = document.getElementById('loginForm');

  if (welcomeMessage) {
    welcomeMessage.style.display = 'none';
  }

  if (loginForm) {
    loginForm.style.display = 'block';
  }
}

function hideForm() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.style.display = 'none';
  }
}

function deleteCookiesAndShowForm() {
  document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  showForm();
}

function showWelcomeMessageOrForm() {
  const welcomeMessage = document.querySelector('h1');
  const body = document.body;

  if (!loggedIn) {
    const welcomeH1 = document.createElement('h1');
    const welcomeText = document.createTextNode(`Welcome ${getCookie('firstname')} `);
    const logoutLink = document.createElement('a');
    logoutLink.href = '#';
    logoutLink.textContent = '(logout)';
    logoutLink.style.fontWeight = 'normal';
    logoutLink.style.fontStyle = 'italic';
    logoutLink.style.marginLeft = '10px';
    logoutLink.onclick = function() {
      deleteCookiesAndShowForm();
      welcomeH1.style.display = 'none';
      showForm();
    };

    welcomeH1.appendChild(welcomeText);
    welcomeH1.appendChild(logoutLink);
    body.replaceChild(welcomeH1, welcomeMessage);
    loggedIn = true;
  } else {
    showForm();
  }
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split('; ');

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].split('=');
    if (cookie[0] === name) {
      return cookie[1];
    }
  }

  return '';
}

showForm();
