# Boas vindas ao repositório do projeto de Carrinho de Compras!

  Este projeto feito ao fim do bloco 8 no curso da [Trybe](https://www.betrybe.com/) para consolidar meu
  conhecimentos de html, css, javascript e manipulação da DOM.

## Avaliação feita pela trybe.

<img src='https://user-images.githubusercontent.com/79944385/167013784-531dd979-badf-4064-8ec3-42edcc0fc269.png'>

## Habilidades usadas

- Fazer requisições a uma API *(Application Programming Interface)* do Mercado Livre;
- Utilizar os seus conhecimentos sobre JavaScript, CSS e HTML;
- Trabalhar com funções assíncronas;
- Implementar testes unitários.

## O que foi desenvolvido

Nesse projeto foi desenvolvido um **carrinho de compras** totalmente dinâmico! consumindo dados diretamente de uma **API!**. Através de **requisições HTTP** a essa API. Aqui usaremos a API do Mercado Livre para buscarmos produtos à venda.

### Pontos importantes para a implementação dos testes

Foi disponibilizado uma API simulada para que seja implementado os testes. Isso significa que será possível simular o consumo de todos os dados da API dentro do seu ambiente de testes, de forma segura e independente de fatores externos que possam ocorrer.

- O `window.fetch` está definido em todos os testes, ou seja, será possível usar a função `fetch` dentro do ambiente de testes.
- O `localStorage.getItem` e o `localStorage.setItem` pode ser usada normalmente no ambiente de teste, pois a simulação dele está pronta para ser chamada quando necessário.
- Para nosso ambiente de testes, o `fetch` está limitado a atender somente a configuração da API referente ao projeto;

# Requisitos do projeto

## API Shopping Cart

O [manual da API do Mercado Livre](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas) contém muitas informações sobre ela. Utilizaremos alguns dos _endpoints_, e a forma de uso está detalhada no primeiro requisito.


### 1. Crie uma listagem de produtos

Este requisito pode ser feito em conjunto com o [requisito 8](#8-desenvolva-testes-de-no-mínimo-25-de-cobertura-total-e-100-da-função-fetchproducts) se você optar por aplicar TDD, para isso basta olhar as orientações do requisito 8 e aplicar o que é solicitado em conjunto.

Você deve criar uma listagem de produtos que devem ser consultados através da API do Mercado Livre.

Para isso, você terá de implementar a função `fetchProducts` que já está criada no arquivo `fetchProducts.js` que se encontra dentro da pasta `helpers`. Mas atenção, dentro do arquivo `fetchProducts.js` deve ser implementada **apenas** a função `fetchProducts`.

A função `fetchProducts` que você irá implementar, deve consumir o seguinte _endpoint_:

```javascript
"https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
```

Onde `$QUERY` deve ser o valor da sua busca. Para este trabalho, a busca deve ser **obrigatoriamente** o termo `computador`.

### 2. Adicione o produto ao carrinho de compras

Este requisito pode ser feito em conjunto com o [requisito 9](#9-desenvolva-testes-de-no-mínimo-50-de-cobertura-total-e-100-da-função-fetchitem) se você optar por aplicar TDD, para isso basta olhar as orientações do requisito 9 e aplicar o que é solicitado em conjunto.

Cada produto na página _HTML_ possui um botão com o nome `Adicionar ao carrinho`.

Ao clicar nesse botão você deve realizar uma requisição que irá retornar todos os dados específicos de um produto.

Para isso, você terá de implementar a função `fetchItem` que já está criada no arquivo `fetchItem.js`, que se encontra dentro da pasta `helpers`. Lá, você deverá implementar **apenas** a função `fetchItem`.

A função `fetchItem` que você irá implementar, deve consumir o seguinte _endpoint_:

```javascript
"https://api.mercadolibre.com/items/$ItemID"
```

onde `$ItemID` deve ser o valor `id` do item selecionado.

### 3. Remova o item do carrinho de compras ao clicar nele

Ao clicar no **produto no carrinho de compra**, ele deve ser removido da lista.
Para isso, dentro do arquivo `script.js` você deve procurar pela função `cartItemClickListener(event)` e implementar a lógica necessária para realizar a remoção.

---

### 4. Carregue o carrinho de compras através do **LocalStorage** ao iniciar a página

Este requisito pode ser feito em conjunto com os requisitos [10](#10-desenvolva-testes-de-no-mínimo-75-de-cobertura-total-e-100-da-função-savecartitems) e [11](#11-desenvolva-testes-para-atingir-100-de-cobertura-total-e-100-da-função-getsavedcartitems), se você optar por aplicar TDD, para isso basta olhar as orientações dos requisitos 10 e 11 e aplicar o que é solicitado em conjunto.

Ao carregar a página, o estado atual do carrinho de compras deve ser carregado do **LocalStorage**. Para que isso funcione, o carrinho de compras deve ser salvo no **LocalStorage**, ou seja, todas as **adições** e **remoções** devem ser abordadas para que a lista esteja sempre atualizada.

Para isso, você terá de implementar as funções `saveCartItems` e `getSavedCartItems` que já estão criadas com o nome `saveCartItems.js` e `getSavedCartItems.js`, respectivamente, dentro da pasta `helpers`.

### 5. Calcule o valor total dos itens do carrinho de compras

Cada vez que se modificar os itens do carrinho de compras, será necessário calcular seus valores e apresentá-los na página principal do projeto. O elemento que tem como filho o preço total dos itens do carrinho deve ter, **obrigatoriamente**, a classe `total-price`.

Obs: Devemos tomar cuidado, pois estamos buscando os dados do produto em uma API. Portanto, é necessário garantir que a API já retornou as informações para somente depois realizar o cálculo dos valores do carrinho.

**Atenção:** ao criar novas funções para resolver este requisito, faça as implementações **sempre** dentro do arquivo `script.js`.
---

### 6. Implemente a lógica no botão `Esvaziar carrinho` para limpar o carrinho de compras

Implemente nesse botão a lógica para remover todos os itens do carrinho de compras. O botão deve **obrigatoriamente**, ter a classe `empty-cart`.

**Atenção:** ao criar novas funções para resolver este requisito, faça as implementações **sempre** dentro do arquivo `script.js`.

---

### 7. Adicione um texto de "carregando" durante uma requisição à API

Uma requisição à API gasta um tempo e durante ele, ficamos sem saber se está tudo certo ou se algo deu errado.
Normalmente é utilizada alguma forma para mostrar a pessoa usuária que a requisição está em andamento.

* Crie um elemento que contenha o texto "carregando...", que deve ser exibido em algum lugar da página;
* Este elemento deve ser mostrado **apenas durante** a requisição à API;
* Este elemento deve **obrigatoriamente** ter a classe `loading`;

***spoiler-alert***: você pode criar uma função que adicione ao DOM o elemento com o texto "carregando" e outra para retirá-lo, o que acha?

**Atenção:** ao criar novas funções para resolver este requisito, faça as implementações **sempre** dentro do arquivo `script.js`.

---

### 8. Desenvolva testes de no mínimo 25% de cobertura total e 100% da função `fetchProducts`

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**Observações técnicas:**

- Use o comando `npm test` para verificar se seus testes estão passando;
- **OBS:** Você deve implementar os 5 requisitos, independente do que for suficiente para a cobertura de testes.
- **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.
- Lembre-se de ler com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!
- **A cobertura irá checar apenas as funções destacadas e não toda a aplicação!**

**O que você deve testar**

> Dentro da pasta `tests`, abra o arquivo `fetchProducts.test.js` e faça o solicitado:

1. Teste se `fetchProducts` é uma função;

2. Execute a função `fetchProducts` com o argumento "computador" e teste se `fetch` foi chamada;

3. Teste se, ao chamar a função `fetchProducts` com o argumento "computador", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";

4. Teste se o retorno da função `fetchProducts` com o argumento "computador" é uma estrutura de dados igual ao objeto `computadorSearch`, que já está importado no arquivo.

5. Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: `You must provide an url`. **Dica:** Lembre-se de usar o `new Error('mensagem esperada aqui')` para comparar com o objeto retornado da API.

### 9. Desenvolva testes de no mínimo 50% de cobertura total e 100% da função `fetchItem`

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**Observações técnicas:**

- Use o comando `npm test` para verificar se seus testes estão passando;
- **OBS:** Você deve implementar os 5 requisitos, independente do que for suficiente para a cobertura de testes.
- **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.
- Lembre-se de ler com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!
- **A cobertura de testes irá checar apenas as funções que estão sendo testadas, e não toda a aplicação!**

**O que você deve testar**

> Dentro da pasta `tests`, abra o arquivo `fetchItem.test.js` e faça o solicitado:

1. Teste se `fetchItem` é uma função;

2. Execute a função `fetchItem` com o argumento do item "MLB1615760527" e teste se `fetch` foi chamada;

3. Teste se, ao chamar a função `fetchItem` com o argumento do item "MLB1615760527", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";

4. Teste se o retorno da função `fetchItem` com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto `item` que já está importado no arquivo.

5. Teste se, ao chamar a função `fetchItem` sem argumento, retorna um erro com a mensagem: `You must provide an url`. **Dica:** Lembre-se de usar o `new Error('mensagem esperada aqui')` para comparar com o objeto retornado da API.

### 10. Desenvolva testes de no mínimo 75% de cobertura total e 100% da função `saveCartItems`

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**Observações técnicas:**

- Use o comando `npm test` para verificar se seus testes estão passando;
- **OBS:** Você deve implementar os 2 requisitos, independente do que for suficiente para a cobertura de testes.
- **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.
- Lembre-se de ler com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!
- **A cobertura de testes irá checar apenas as funções que estão sendo testadas, e não toda a aplicação!**

**O que você deve testar**

> Dentro da pasta `tests`, abra o arquivo `saveCartItems.test.js` e faça o solicitado:

1. Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado;

2. Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` é chamado com dois parâmetros, sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento para `saveCartItems`.

### 11. Desenvolva testes para atingir 100% de cobertura total e 100% da função `getSavedCartItems`

> Implemente os testes nos arquivos da pasta `tests` que está na raiz do projeto.

**Observações técnicas:**

- Use o comando `npm test` para verificar se seus testes estão passando.
- **OBS:** Você deve implementar os 2 requisitos, independente do que for suficiente para a cobertura de testes.
- **Atenção:** não altere a estrutura já implementada nos arquivos de testes, apenas adicione os testes dentro do bloco `describe`.
- Lembre-se de ler com bastante atenção o que está sendo solicitado e implemente um teste de cada vez!
- **A cobertura de testes irá checar apenas as funções que estão sendo testadas, e não toda a aplicação!**

**O que você deve testar**

> Dentro da pasta `tests`, abra o arquivo `getSavedCartItems.test.js` e faça o solicitado:

1. Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado;
2. Teste se, ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado com o 'cartItems' como parâmetro.
