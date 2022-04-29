const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  beforeEach(() => {
    getSavedCartItems();
  });

  it('Verifica se chama o método correto', () => {
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Verifica se chama o método com o argumento correto', () => {
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
