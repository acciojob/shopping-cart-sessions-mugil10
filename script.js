const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 }
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function displayProducts() {
  productList.innerHTML = "";

  products.forEach(function(product) {
    const li = document.createElement("li");

    li.innerHTML = `
      ${product.name} - $${product.price}
      <button>Add to Cart</button>
    `;

    const button = li.querySelector("button");

    button.addEventListener("click", function() {
      cart.push(product);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
    });

    productList.appendChild(li);
  });
}

function displayCart() {
  cartList.innerHTML = "";

  cart.forEach(function(product) {
    const li = document.createElement("li");

    li.textContent = `${product.name} - $${product.price}`;

    cartList.appendChild(li);
  });
}

clearCartBtn.addEventListener("click", function() {
  cart = [];
  sessionStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
});

displayProducts();
displayCart();