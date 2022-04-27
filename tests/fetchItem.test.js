require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  
  it('Verifica se chama a função "fetch"', async () => {
    await fetchItem('MLB1615760527');
    const urlCalled = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(urlCalled);
  });

  it('Verifica se retorna o objeto esperado', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });

  it('Verifica se não passar nenhum argumento, retorna um erro com a mensagem correta', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  })
});
