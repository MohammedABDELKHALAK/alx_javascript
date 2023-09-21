let loggedIn = false;

function setCookiesAndShowWelcomeMessage() {
  const firstnameValue = document.getElementById('firstnameInput').value;
  const emailValue = document.getElementById('emailInput').value;

  Cookies.set('firstname', firstnameValue);
  Cookies.set('email', emailValue);

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
  Cookies.remove('firstname');
  Cookies.remove('email');
  showForm();
}

function showWelcomeMessageOrForm() {
  const welcomeMessage = document.querySelector('h1');
  const body = document.body;

  if (!loggedIn) {
    const welcomeH1 = document.createElement('h1');
    const welcomeText = document.createTextNode(`Welcome ${Cookies.get('firstname')} `);
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

showForm();
