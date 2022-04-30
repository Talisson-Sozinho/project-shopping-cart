const cartItems = document.querySelector('.cart__items');
const totalPriceContainer = document.querySelector('.total-price');
const clearCartButton = document.querySelector('.empty-cart');
const itemsContainer = document.querySelector('.items');

function calculateCartPrice() {
  const cartItemsNodes = cartItems.childNodes;
  let total = 0;
  cartItemsNodes.forEach((item) => {
    const price = item.innerText.split('$')[1];
    total += Number(price);
  });
  totalPriceContainer.innerText = total;
}

clearCartButton.addEventListener('click', () => {
  cartItems.innerHTML = null;
  saveCartItems(cartItems.innerHTML);
  calculateCartPrice();
});

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  event.target.remove();
  calculateCartPrice();
  saveCartItems(cartItems.innerHTML);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

async function addToCart(event) {
  const cardElement = event.target.parentElement;
  const skuProductNumber = getSkuFromProductItem(cardElement);
  const { id: sku, title: name, price: salePrice } = await fetchItem(skuProductNumber);
  const cartItemElement = createCartItemElement({ sku, name, salePrice });
  cartItems.appendChild(cartItemElement);
  saveCartItems(cartItems.innerHTML);
  calculateCartPrice();
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const buttonAddToCart = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  buttonAddToCart.addEventListener('click', addToCart);
  section.appendChild(buttonAddToCart);

  return section;
}

async function showItems() {
  const { results } = await fetchProducts('computador');
  results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    const cardElementCreated = createProductItemElement({ sku, name, image });
    itemsContainer.appendChild(cardElementCreated);
  });
}

function loadProductsAtCart() {
  cartItems.innerHTML = getSavedCartItems();
  calculateCartPrice();
  cartItems.childNodes.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
}

const loadingMessage = {
  initLoading: () => {
    const loadingElement = document.createElement('p');
    loadingElement.innerText = 'carregando...';
    loadingElement.className = 'loading';
    const loadingCart = loadingElement.cloneNode(true);
    cartItems.appendChild(loadingElement);
    itemsContainer.appendChild(loadingCart);
  },
  breakLoading: () => {
    document.querySelectorAll('.loading').forEach((element) => {
      element.remove();
    });
  },
};

window.onload = async () => {
  loadProductsAtCart();
  loadingMessage.initLoading();
  await showItems();
  loadingMessage.breakLoading();
};
