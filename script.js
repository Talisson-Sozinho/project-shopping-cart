const cartItems = document.querySelector('.cart__items');

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
  const itemsContainer = document.querySelector('.items');

  results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    const cardElementCreated = createProductItemElement({ sku, name, image });
    itemsContainer.appendChild(cardElementCreated);
  });
}

function loadProductsAtCart() {
  cartItems.innerHTML = getSavedCartItems();
  cartItems.childNodes.forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
}

window.onload = () => {
  loadProductsAtCart();
  showItems();
};
