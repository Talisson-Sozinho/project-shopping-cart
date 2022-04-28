const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  beforeEach(() => {
    itemForSave = '<ol><li>Item</li></ol>';
    keyForSave = 'cartItems';
    saveCartItems(itemForSave);
  })

  it('Verifica se usa o método de salvar no localStorage', () => {
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Verifica se usa o método de salvar com os argumentos certo', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith(keyForSave, itemForSave);
  });
});
