const plants = [
  {name: "Peace Lily Plant", price: 249, oldPrice: 399, rating: 4.81, reviews: 387, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWyAmcCxr2azT4JtfYr7pyjV5NgAND7ZQHQ&s", desc:"Peace Lily purifies air and adds calmness."},
  {name: "Spider Plant", price: 249, oldPrice: 299, rating: 4.73, reviews: 183, img: "https://ushashriram.in/cdn/shop/files/613Vz4C2HTL_1200x.jpg?v=1723113107", desc:"Spider Plant is easy to grow and very resilient."},
  {name: "Bamboo Palm", price: 299, oldPrice: 499, rating: 4.82, reviews: 171, img: "https://vckgreens.in/cdn/shop/products/Artificial-Variegated-Monstera-Ph.jpg", desc:"Bamboo Palm improves indoor air quality."},
  {name: "ZZ Plant", price: 449, oldPrice: 599, rating: 4.79, reviews: 178, img: "https://ushashriram.in/cdn/shop/files/613Vz4C2HTL_1200x.jpg?v=1723113107", desc:"ZZ Plant thrives with little water and light."},
  {name: "Money Plant", price: 199, oldPrice: 299, rating: 4.75, reviews: 201, img: "https://i.pinimg.com/236x/58/7b/a3/587ba3560db525c5385b579b85683a2b.jpg", desc:"Brings wealth & positivity."},
  {name: "Areca Palm", price: 399, oldPrice: 599, rating: 4.83, reviews: 412, img: "https://m.media-amazon.com/images/I/818y7VF8igL._AC_SL1500_.jpg", desc:"Great indoor plant for homes."},
  {name: "Snake Plant", price: 299, oldPrice: 449, rating: 4.85, reviews: 290, img: "https://cdn.shopify.com/s/files/1/0686/9516/3103/files/Hanging_Plant_Pots_Jute_Indoor_Plants_Rope_Hanging_Bathroom_Bedroom_Kitchen_Ceiling_Herb_Natural_Planters_-_Etsy_480x480.jpg?v=1719644308", desc:"Low-maintenance and air purifying."},
   // New Plants
  {name: "Aloe Vera", price: 199, oldPrice: 299, rating: 4.80, reviews: 256, img: "https://m.media-amazon.com/images/I/71+O8sB2G0L._AC_SL1500_.jpg", desc:"Aloe Vera is great for skin and air purification."},
  {name: "Jade Plant", price: 349, oldPrice: 499, rating: 4.77, reviews: 198, img: "https://nurserylive.com/cdn/shop/products/nurserylive-plants-crassula-ovata-jade-plant-plant-16969389064204.jpg", desc:"Symbol of good luck and prosperity."},
  {name: "Lucky Bamboo", price: 299, oldPrice: 449, rating: 4.74, reviews: 220, img: "https://www.plants.com/images/lg/6-spiral-bamboo-plant-178124.jpg", desc:"Brings positivity and is easy to care for."},
  {name: "Fiddle Leaf Fig", price: 599, oldPrice: 899, rating: 4.70, reviews: 132, img: "https://www.thesill.com/cdn/shop/files/the-sill_faux-fiddle-leaf-fig_variant_medium_mint_1440x.jpg", desc:"Trendy plant that thrives in bright light."},
  {name: "Rubber Plant", price: 399, oldPrice: 599, rating: 4.76, reviews: 310, img: "https://m.media-amazon.com/images/I/81RDSKZ8LXL._AC_SL1500_.jpg", desc:"Rubber Plant is a stylish indoor plant."},
  {name: "Boston Fern", price: 249, oldPrice: 399, rating: 4.68, reviews: 147, img: "https://www.gardendesign.com/pictures/images/900x705Max/site_3/green-boston-fern-nephrolepis-exaltata-shutterstock-com_14011.jpg", desc:"Classic fern that loves humidity."},
  {name: "Croton Plant", price: 349, oldPrice: 499, rating: 4.72, reviews: 164, img: "https://m.media-amazon.com/images/I/81VcN1v93mL._AC_SL1500_.jpg", desc:"Colorful foliage, adds beauty indoors."},
  {name: "Philodendron", price: 279, oldPrice: 399, rating: 4.78, reviews: 233, img: "https://www.thesill.com/cdn/shop/products/the-sill_philodendron-green_small_cream_variant_1440x.jpg", desc:"Easy to care for and beautiful leaves."},
  {name: "Calathea", price: 329, oldPrice: 499, rating: 4.71, reviews: 143, img: "https://m.media-amazon.com/images/I/81qaaT6VdEL._AC_SL1500_.jpg", desc:"Known as prayer plant, has stunning leaves."},
  {name: "Pothos (Golden)", price: 199, oldPrice: 299, rating: 4.84, reviews: 312, img: "https://www.thesill.com/cdn/shop/products/golden-pothos-cream-variant.jpg", desc:"Low-maintenance trailing plant."},
  {name: "Chinese Evergreen", price: 349, oldPrice: 499, rating: 4.73, reviews: 175, img: "https://www.gardenia.net/storage/app/public/plant_family/detail/chinese-evergreen.jpg", desc:"Perfect indoor plant with variegated leaves."},
  {name: "Bird of Paradise", price: 699, oldPrice: 999, rating: 4.69, reviews: 109, img: "https://www.thesill.com/cdn/shop/products/the-sill_bird-of-paradise_variant_medium_mint.jpg", desc:"Tall plant with tropical look."},
  {name: "Oxalis (Purple Shamrock)", price: 259, oldPrice: 399, rating: 4.67, reviews: 118, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Oxalis_triangularis_flower.jpg/800px-Oxalis_triangularis_flower.jpg", desc:"Beautiful purple-leaf indoor plant."},
  {name: "Begonia Rex", price: 299, oldPrice: 449, rating: 4.65, reviews: 121, img: "https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/begonia-rex.jpg", desc:"Vibrant patterned foliage."},
  {name: "Coleus Plant", price: 199, oldPrice: 349, rating: 4.70, reviews: 142, img: "https://www.ugaoo.com/cdn/shop/products/Coleus_Plant.jpg", desc:"Brightly colored indoor decorative plant."},
  {name: "Anthurium", price: 399, oldPrice: 599, rating: 4.75, reviews: 184, img: "https://m.media-amazon.com/images/I/71CMGN28AL._AC_SL1500_.jpg", desc:"Striking flowers, often called Flamingo Flower."},
  {name: "Lavender", price: 279, oldPrice: 399, rating: 4.72, reviews: 204, img: "https://www.gardeningknowhow.com/wp-content/uploads/2021/07/lavender-herb.jpg", desc:"Beautiful fragrance and calming flowers."},
  {name: "Chamomile", price: 229, oldPrice: 349, rating: 4.68, reviews: 98, img: "https://m.media-amazon.com/images/I/81Bq8c3B9QL._AC_SL1500_.jpg", desc:"Herbal plant used for calming tea."},
  {name: "Rosemary", price: 249, oldPrice: 399, rating: 4.74, reviews: 145, img: "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/rosemary-closeup.jpg", desc:"Aromatic herb, great for cooking."},
  {name: "Basil", price: 199, oldPrice: 299, rating: 4.79, reviews: 213, img: "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/basil-growing.jpg", desc:"Fresh herb, widely used in dishes."},
  {name: "Mint", price: 189, oldPrice: 249, rating: 4.77, reviews: 198, img: "https://www.gardeningknowhow.com/wp-content/uploads/2021/05/mint-herb.jpg", desc:"Easy-growing herb with refreshing aroma."},
  {name: "Parsley", price: 159, oldPrice: 249, rating: 4.69, reviews: 112, img: "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/parsley-growing.jpg", desc:"Common culinary herb with fresh flavor."},
  {name: "Thyme", price: 179, oldPrice: 279, rating: 4.71, reviews: 128, img: "https://www.gardeningknowhow.com/wp-content/uploads/2020/10/thyme-growing.jpg", desc:"Fragrant herb for cooking and teas."},
  {name: "Dwarf Umbrella Tree", price: 399, oldPrice: 549, rating: 4.73, reviews: 153, img: "https://m.media-amazon.com/images/I/71BphFz4RPL._AC_SL1500_.jpg", desc:"Schefflera with attractive foliage."},
  {name: "Norfolk Island Pine", price: 599, oldPrice: 799, rating: 4.76, reviews: 98, img: "https://www.thesill.com/cdn/shop/products/norfolk-pine_variant_medium_cream.jpg", desc:"Mini indoor Christmas tree lookalike."},
  {name: "Coffee Plant", price: 249, oldPrice: 349, rating: 4.74, reviews: 122, img: "https://www.thesill.com/cdn/shop/products/the-sill_coffee-plant_variant_small_mint.jpg", desc:"Glossy leaves, can be grown indoors."},
  {name: "Kalanchoe", price: 219, oldPrice: 329, rating: 4.70, reviews: 141, img: "https://m.media-amazon.com/images/I/81hUzrAqfZL._AC_SL1500_.jpg", desc:"Succulent plant with colorful blooms."},
  {name: "Succulent Mix", price: 499, oldPrice: 699, rating: 4.85, reviews: 305, img: "https://m.media-amazon.com/images/I/81MS1VvMX-L._AC_SL1500_.jpg", desc:"Assorted low-maintenance succulents."}

];

const container = document.getElementById("product-list");
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalRating = document.getElementById("modalRating");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");
const addToCart = document.getElementById("addToCart");

// Render product cards
plants.forEach((p, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="card-wrapper">
      <span class="discount-tag">Price Drop!</span>
      <img src="${p.img}" alt="${p.name}">
    </div>
    <div class="card-body">
      <div class="plant-name">${p.name}</div>
      <div class="price">₹${p.price} <del>₹${p.oldPrice}</del></div>
      <div class="rating">⭐ ${p.rating} | ${p.reviews}</div>
      <button class="btn viewBtn" data-index="${index}">View Product</button>
    </div>
  `;
  container.appendChild(card);
});

// Open modal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("viewBtn")) {
    const i = e.target.dataset.index;
    const plant = plants[i];

    modalImg.src = plant.img;
    modalName.textContent = plant.name;
    modalPrice.innerHTML = `₹${plant.price} <del>₹${plant.oldPrice}</del>`;
    modalRating.textContent = `⭐ ${plant.rating} | ${plant.reviews} reviews`;
    modalDesc.textContent = plant.desc;

    modal.style.display = "flex";
  }
});

// Close modal
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
addToCart.addEventListener("click", () => {
  const name = modalName.textContent;
  const plant = plants.find(p => p.name === name);

  cart.push(plant);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Item added to cart!");
  modal.style.display = "none";
});
