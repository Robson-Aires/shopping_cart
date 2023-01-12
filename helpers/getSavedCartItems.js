const getSavedCartItems = () => {
  const resultado = localStorage.getItem('cartItems');
  return resultado;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
