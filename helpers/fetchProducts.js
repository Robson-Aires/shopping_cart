const armazenalink = (Product) => `https://api.mercadolibre.com/sites/MLB/search?q=${Product}`;
const fetchProducts = async (ProductName) => {
   const endpoint = armazenalink(ProductName);
   try {
     const response = await fetch(endpoint);
     const { results } = await response.json();
     return results;
   } catch (error) {
    throw new Error('You must provide an ur');
   }
 };
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
