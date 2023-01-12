const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

 localStorageSimulator('setItem');
 localStorageSimulator('getItem')

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado;', () => {
   saveCartItems('cartItems');
    expect(localStorage.setItem).toHaveBeenCalled();
    })
  });
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', async () => {
    await saveCartItems('cartItems', 'computador');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'computador');
  });