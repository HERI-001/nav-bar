let carts = [
  {
    image: "images/silver plate.webp",
    product: "Water Plate",
    price: 6000,
    description: "This is the best plate for water",
  },
  {
    image: "images/Workshop_pics.webp",
    product: "Garri Plate",
    price: 3000,
    description: "This plate is best for garri",
  },
  {
    image: "images/product_2A.webp",
    product: "Sugar Plate",
    price: 5000,
    description: "This is the best plate for sugar",
  },
  {
    image: "images/Workshop_pics.webp",
    product: "Garri Plate",
    price: 3000,
    description: "This plate is best for garri",
  },
  {
    image: "images/silver plate.webp",
    product: "Water Plate",
    price: 6000,
    description: "This is the best plate for water",
  },
  {
    image: "images/product_2A.webp",
    product: "Sugar Plate",
    price: 5000,
    description: "This is the best plate for sugar",
  },
];

let cart = [];

function addToCart(item) {
  let itemExists = cart.find((a) => a.product == item.product);
  if (itemExists) {
    itemExists.quantity = itemExists.quantity + 1;
    let indexOfItem = cart.findIndex((a) => a.product == item.product);
    cart[indexOfItem] = itemExists;
  } else {
    item.quantity = 1;
    cart.push(item);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("num").innerHTML = `<h1>${cart.length}</h1>`;
}

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

let goods = document.querySelector("#cart-log");
carts.forEach((item, index) => {
  let everything = document.createElement("div");
  everything.innerHTML = `
      <img src="${item.image}" alt="${item.product}">
      <h2>${item.product}</h2>
      <h3>${item.price}</h3>
      <p>${item.description}</p>
      <button id="add${index}">Add to cart</button>
    `;

  goods.appendChild(everything);

  document
    .getElementById(`add${index}`)
    .addEventListener("click", () => addToCart(item));
});

loadCart();
