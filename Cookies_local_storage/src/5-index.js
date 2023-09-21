const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

function checkLocalStorage() {
  if (typeof(Storage) === 'undefined') {
    alert('Sorry, your browser does not support Web storage. Try again with a better one');
    return false;
  }
  return true;
}

function addItemToCart(item) {
  localStorage.setItem(item, true);
  displayCart();
}

function createStore() {
  const ul = document.createElement('ul');
  for (const item of availableItems) {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => addItemToCart(item));
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}

function displayCart() {
    // different here between local storage and sessio storage, here we usde this code Object.keys(localStorage) 
  const cartItems = Object.keys(localStorage);
  if (cartItems.length === 0) return;

  const p = document.createElement('p');
  p.textContent = `You previously had ${cartItems.length} items in your cart.`;
  document.body.appendChild(p);
}

// this condition to check local storage 
if (checkLocalStorage()) {
  createStore();
  displayCart();
  deleteNonAvailableCookies();
}


function deleteNonAvailableCookies() {
    for (let i = 0; i < localStorage.length; i++) {
      const cookieName = localStorage.key(i);
  
      // Check if the cookie is not in the availableItems
      if (availableItems.indexOf(cookieName) === -1) {
        // Remove the cookie
        localStorage.removeItem(cookieName);
      }
    }
  }
  