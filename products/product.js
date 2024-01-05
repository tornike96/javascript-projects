const productDOM = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
  // productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class="error">There was a problem!</p>`;
  }
};

const displayProduct = (product) => {
  const { company, name: title, price, colors, description } = product.fields;
  const { url: img } = product.fields.image[0];
  document.title = title.toUpperCase();
  const fixedPrice = price / 10;
  // adds color dymanically
  const colorList = colors
    .map((color) => {
      return ` <span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');
  // company, price, description, name: title, colors, image
  productDOM.innerHTML = ` <div class="product-wrapper">
  <img src="${img}" alt="${title}" class="img" />
  <div class="product-info">
    <h3>${title}</h3>
    <h5>${company}</h5>
    <span>$${fixedPrice}</span>
    <div class="colors">${colorList}</div>
    <p>${description}</p>
    <button class="btn">add to cart</button>
  </div>
</div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
