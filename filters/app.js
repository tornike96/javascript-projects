let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');
const form = document.querySelector('.input-form');
const formInput = document.querySelector('.search-input');
const btnsContainer = document.querySelector('.companies');

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no such product was found.</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<article class="product" data-id="${id}">
    <img
      src="${image}"
      class="product-img img"
    />
    <footer>
      <h5 class="product-name">${title}</h5>
      <span class="product-price">$${price}</span>
    </footer>
  </article>`;
    })
    .join('');
};

displayProducts();

form.addEventListener('keyup', () => {
  const inputValue = formInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];
  btnsContainer.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join('');
};

displayButtons();

btnsContainer.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }
    formInput.value = ' ';
    displayProducts();
  }
});
