const fetchProducts = async (productName) => {
  const endPointUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${productName}`;
  try {
    const response = await fetch(endPointUrl);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
