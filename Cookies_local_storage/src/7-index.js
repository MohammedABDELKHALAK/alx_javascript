const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

function getCartFromStorage() {
  const cartString = sessionStorage.getItem('cart');
  return cartString ? JSON.parse(cartString) : {};
}

function saveCartToStorage(cart) {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

function addItemToCart(item) {
  const cart = getCartFromStorage();
  cart[item] = cart[item] ? cart[item] + 1 : 1;
  saveCartToStorage(cart);
  displayCart();
}

function removeItemFromCart(item) {
  const cart = getCartFromStorage();
  delete cart[item];
  saveCartToStorage(cart);
  displayCart();
}

function clearCart() {
  sessionStorage.removeItem('cart');
  displayCart();
}

function createStore() {
  const availableProducts = document.getElementById('availableProducts');
  availableItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
      addItemToCart(item);
    });
    availableProducts.appendChild(li);
  });
}

function displayCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';  // Clear previous contents
  const cart = getCartFromStorage();

  const cartList = document.createElement('ul');

  if (Object.keys(cart).length === 0) {
    const emptyCartMsg = document.createElement('li');
    emptyCartMsg.textContent = 'Your cart is empty';
    cartList.appendChild(emptyCartMsg);
  } else {
    for (const item in cart) {
      const li = document.createElement('li');
      li.textContent = `${item} x ${cart[item]} `;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        removeItemFromCart(item);
      });
      li.appendChild(removeButton);
      cartList.appendChild(li);
    }
  }

  const clearCartButton = document.createElement('button');
  clearCartButton.textContent = 'Clear my cart';
  clearCartButton.addEventListener('click', () => {
    clearCart();
  });

  cartDiv.appendChild(clearCartButton);
  cartDiv.appendChild(cartList);
}

window.onload = () => {
  if (typeof(Storage) === 'undefined') {
    alert('Sorry, your browser does not support Web storage. Try again with a better one');
  } else {
    createStore();
    displayCart();
  }
};
