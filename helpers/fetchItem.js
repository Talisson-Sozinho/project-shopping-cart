const fetchItem = async (itemId) => {
  const endPointUrl = `https://api.mercadolibre.com/items/${itemId}`;
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
    fetchItem,
  };
}
