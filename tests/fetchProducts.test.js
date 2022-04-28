require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se é uma função', () => {
    expect( typeof fetchProducts ).toBe('function');
  });

  it('Verifica se ao executar, a função "fetch" é executada', async () => {
    await fetchProducts('computador');
    const endPointCalled = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(endPointCalled);
  });

  it('Verifica se retorna a estrutura de dados corretamente', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });

  it('Verifica se não passar nenhum argumento, retorna um erro com a mensagem correta', async ()=> {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'));
  });
});
