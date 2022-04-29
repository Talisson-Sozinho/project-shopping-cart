const saveCartItems = (itemsHtml) => {
  localStorage.setItem('cartItems', itemsHtml);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
