const fetchProducts = async (product) => {
  const endPointUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
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
