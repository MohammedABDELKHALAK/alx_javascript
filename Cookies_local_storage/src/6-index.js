//store data on session storage that is mean if you open new tab browser session stroge in this new tab will be empty

const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

function addItemToCart(item) {
  // Use session storage to store the cart items
  sessionStorage.setItem(item, 'true');
}

function createStore() {
  const ul = document.createElement('ul');
  document.body.appendChild(ul);

  availableItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
      addItemToCart(item);
    });
    ul.appendChild(li);
  });
}

function displayCart() {
    // different here between local storage and sessio storage, here we usde this code Object.keys(sessionStorage)
  const cartItemsCount = Object.keys(sessionStorage).length;
  if (cartItemsCount > 0) {
    const p = document.createElement('p');
    p.textContent = `You previously had ${cartItemsCount} items in your cart`;
    document.body.appendChild(p);
  }
}

// Check for Session Storage support before proceeding
if (typeof(Storage) === 'undefined') {
  alert('Sorry, your browser does not support Web storage. Try again with a better one');
} else {
  createStore();
  displayCart();
}
