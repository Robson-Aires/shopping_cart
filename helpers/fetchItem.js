const url = (ItemID) => `https://api.mercadolibre.com/items/${ItemID}`;
const fetchItem = async (ItemID) => {
  try {
    const endpoint = url(ItemID);
    const response = await fetch(endpoint);
    const results = await response.json();
    return results;
  } catch (error) {
    throw new Error('You must provide an ur');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
