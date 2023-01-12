require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
 const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('1 - Teste se fetchProducts é uma função', () => {
    expect(fetchProducts).toBeInstanceOf(Function);
  });
  it('Execute a funcção fetchproducts com o argumento "computador", e teste se fetch foi chamada', async () => {
    const xablau = await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled()
  });
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const xablau2 = await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const xablau3 = await fetchProducts('computador')
    expect(xablau3).toBe(computadorSearch.results)
  });
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
   const result = fetchProducts();
    expect(result).rejects.toThrow(new Error('You must provide an ur'))
  });
});
