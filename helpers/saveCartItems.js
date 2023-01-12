const saveCartItems = (parameter) => {
 if (!localStorage.getItem('cartItems')) {
    localStorage.setItem('cartItems', JSON.stringify([]));
  }
  const storage = JSON.parse(localStorage.getItem('cartItems'));
  const newstorage = [...storage, parameter];
 localStorage.setItem('cartItems', JSON.stringify(newstorage));
 return localStorage;
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
