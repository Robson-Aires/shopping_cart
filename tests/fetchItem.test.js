require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('1 - Teste se fetchItem é uma função', () => {
    expect(fetchItem).toBeInstanceOf(Function);
  });
  it('xecute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    const xablau = await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
  });
  it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    const xablau2 = await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  });
  it('Teste se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item, que já está importado no arquivo.', async () => {
    const xablau3 = await fetchItem('MLB1615760527')
    expect(xablau3).toEqual(item)
  });
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    const result = fetchItem();
    expect(result).rejects.toThrow(new Error('You must provide an ur'))
  });
});
// c

