// Home page: category cards, product rows and hero carousel.
// (Products, header, footer and cart live in data.js and common.js.)

const categoryCards = [
  { title: "Gaming accessories", cat: "gaming", items: [["🎧","Headsets","#dbeafe"],["⌨️","Keyboards","#fde68a"],["🖱️","Mice","#fecaca"],["🎮","Controllers","#d9f99d"]] },
  { title: "Shop for your home", cat: "home", items: [["🛋️","Furniture","#fde68a"],["🍳","Kitchen","#fecaca"],["💡","Lighting","#dbeafe"],["🪴","Decor","#d9f99d"]] },
  { title: "Fashion for you", cat: "fashion", items: [["👕","Tops","#dbeafe"],["👖","Bottoms","#fde68a"],["👟","Shoes","#fecaca"],["👜","Bags","#d9f99d"]] },
  { title: "Top picks in books", cat: "books", items: [["📘","Tech","#dbeafe"],["📙","Fiction","#fde68a"],["📕","Self-help","#fecaca"],["📗","Kids","#d9f99d"]] }
];

const recommendedIds = [25, 14, 22, 28, 29, 17, 23, 18];

function renderCards() {
  document.getElementById("cards").innerHTML = categoryCards.map(c => `
    <div class="card">
      <h3>${c.title}</h3>
      <div class="grid">
        ${c.items.map(([emoji, label, bg]) => `
          <a class="tile" href="category.html?t=${encodeURIComponent(label)}">
            <div class="img" style="background:${bg}">${emoji}</div>${label}
          </a>`).join("")}
      </div>
      <a class="link" href="category.html?c=${c.cat}">See more</a>
    </div>`).join("");
}

function renderRow(id, list) {
  document.getElementById(id).innerHTML = list.map(productCardHTML).join("");
}

// ---- Carousel ----
let idx = 0;
const slides = document.getElementById("slides");
const total = slides.children.length;
function show(i) {
  idx = (i + total) % total;
  slides.style.transform = `translateX(-${idx * 100}%)`;
}
document.getElementById("prev").onclick = () => show(idx - 1);
document.getElementById("next").onclick = () => show(idx + 1);
setInterval(() => show(idx + 1), 5000);

renderCards();
renderRow("row1", PRODUCTS.filter(p => p.category === "electronics"));
renderRow("row2", recommendedIds.map(id => PRODUCTS.find(p => p.id === id)));
