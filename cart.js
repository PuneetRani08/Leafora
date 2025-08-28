const cartContainer = document.getElementById("cart-list");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartContainer.innerHTML = `<h2>Your cart is empty 🛒</h2>`;
} else {
  cart.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-wrapper">
        <img src="${item.img}" alt="${item.name}">
      </div>
      <div class="card-body">
        <div class="plant-name">${item.name}</div>
        <div class="price">₹${item.price} <del>₹${item.oldPrice}</del></div>
        <div class="rating">⭐ ${item.rating} | ${item.reviews}</div>
        <button class="btn removeBtn" data-index="${index}">Remove</button>
      </div>
    `;
    cartContainer.appendChild(card);
  });

  // Remove item from cart
  document.querySelectorAll(".removeBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      cart.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload(); // Refresh cart page
    });
  });
}
// Update cart count everywhere
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelectorAll(".cart-count").forEach(span => {
    span.textContent = cart.length;
  });
}

// Call on page load
updateCartCount();
document.querySelectorAll(".viewBtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    console.log("Button clicked!", e.target); // ✅ check if it fires
    const i = e.target.dataset.index;
    console.log("Index:", i);
  });
});
