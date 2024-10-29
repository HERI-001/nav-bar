let cartItems = JSON.parse(localStorage.getItem("cart"));
console.log(cartItems);

let container = document.querySelector(".cartinfo");
let totalPrice = 0;
cartItems.forEach((item) => {
  let mainDiv = document.createElement("div");
  mainDiv.classList.add(
    "h-64",
    "border",
    "border-2",
    "flex",
    "items-center",
    "justify-between",
    "px-4"
  );
  let img = document.createElement("img");
  img.src = item.image;
  img.classList.add("h-24", "w-24");
  mainDiv.appendChild(img);
  let productName = document.createElement("p");
  productName.innerText = item.product;
  mainDiv.appendChild(productName);
  let price = document.createElement("p");
  price.innerText = item.price;
  mainDiv.appendChild(price);
  let productQuantity = document.createElement("p");
  productQuantity.innerText = item.quantity;
  mainDiv.appendChild(productQuantity);
  let sum = document.createElement("p");
  sum.innerText = item.price * item.quantity;
  mainDiv.appendChild(sum);
  container.appendChild(mainDiv);
  totalPrice = totalPrice + item.price * item.quantity;
});

let totalDiv = document.createElement("div");
totalDiv.classList.add("w-full", "text-right");
totalDiv.innerText = totalPrice;
container.appendChild(totalDiv);

{
  /* <button id="${index}">Add to cart</button>; */
}
