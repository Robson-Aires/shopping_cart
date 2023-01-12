// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições!

// const getSavedCartItems = require("./helpers/getSavedCartItems");

// const getSavedCartItems = require("./helpers/getSavedCartItems");

// const saveCartItems = require("./helpers/saveCartItems");

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
const cartIemsString = '.cart__items';
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */

const BotaoEsvaziaCarrinho = () => {
  const save = document.querySelector(cartIemsString);
  const botaoExcluiTudo = document.querySelector('.empty-cart');
  botaoExcluiTudo.onclick = function () {
    save.innerHTML = '';
  };
};
 const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;
 const cartItemClickListener = ({ target }) => {
  const cart = JSON.parse(getSavedCartItems());
 const newCart = cart.filter((product) => product.id !== target.id);
 localStorage.setItem('cartItems', JSON.stringify(newCart));
   target.remove();
 };

 // aqui é onde tem o click do botão
const btnProductClick = async (event) => {
  const save = document.querySelector(cartIemsString);
  const resultProduct = await fetchItem(getIdFromProductItem(event.target.parentNode));
  const { id, title, price } = resultProduct;
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
    li.id = id;
    li.addEventListener('click', cartItemClickListener);
    saveCartItems({ id, title, price });
     save.appendChild(li);
};
/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
// aqui eu crio os itens do produto
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  const btn = (createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  btn.addEventListener('click', btnProductClick);
  section.appendChild(btn);
  return section;
};
const TextoCarregando = () => {
  const sectionContainer = document.querySelector('.container');
  const divLoading = document.createElement('div');
  divLoading.className = 'div-que-tem-o-loading';
  const divSpinner = document.createElement('div');
  divSpinner.id = 'html-spinner';
  // console.log(divSpinner);
  const TextoOndeFicaOtextoCarregando = document.createElement('p');
  TextoOndeFicaOtextoCarregando.className = 'loading';
  TextoOndeFicaOtextoCarregando.innerText = 'carregando...';
  // console.log(TextoOndeFicaOtextoCarregando);
  divLoading.appendChild(divSpinner);
  // console.log(divLoading);
  divLoading.appendChild(TextoOndeFicaOtextoCarregando);
  sectionContainer.appendChild(divLoading);

  // return sectionContainer;
   };
   const RemoveTextoCarregado = () => {
    const divLoading = document.querySelector('.div-que-tem-o-loading');
    divLoading.remove();
   };
/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const Items = async () => {
  const listOfProduct = await fetchProducts('computador');
  listOfProduct.forEach((product) => {
   const item = createProductItemElement(product);
    document.querySelector('.items').appendChild(item);
  });
};
const recoveryLocalStorage = () => {
  if (!localStorage.getItem('cartItems')) {
    localStorage.setItem('cartItems', JSON.stringify([]));
  }
  const cart = document.querySelector(cartIemsString);
  const productList = JSON.parse(getSavedCartItems());
  console.log(productList);
  productList.forEach((product) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${product.id} | TITLE: ${product.title} | PRICE: $${product.price}`;
  li.addEventListener('click', cartItemClickListener);
  li.id = product.id;
  cart.appendChild(li);
  });
 };
window.onload = async () => {
    TextoCarregando();
  Items();
  RemoveTextoCarregado();
  BotaoEsvaziaCarrinho();
  recoveryLocalStorage();
 };