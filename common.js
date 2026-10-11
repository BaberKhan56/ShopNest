// Shared helpers + header/footer used by every page. Requires data.js to be loaded first.
const params = new URLSearchParams(location.search);
const rupee = n => "₹" + n.toLocaleString("en-IN");
const stars = r => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r)) + " " + r.toFixed(1);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ---- Cart (saved in the browser with localStorage) ----
const CART_KEY = "shopnest_cart";
let memCart = {};
function getCart() {
  try { const v = localStorage.getItem(CART_KEY); return v ? JSON.parse(v) : memCart; }
  catch (e) { return memCart; }
}
function saveCart(cart) {
  memCart = cart;
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  updateCartCount();
}
function cartCount() { return Object.values(getCart()).reduce((a, b) => a + b, 0); }
function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (el) el.textContent = cartCount();
}
function addToCart(id, qty = 1) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + qty;
  saveCart(cart);
}

// ---- Product card (used on home, category and product pages) ----
function productCardHTML(p) {
  const off = p.mrp ? Math.round((1 - p.price / p.mrp) * 100) : 0;
  const url = "product.html?id=" + p.id;
  return `
    <div class="product">
      <a class="img" href="${url}" aria-label="${esc(p.name)}">${p.emoji}</a>
      <div class="name"><a href="${url}">${esc(p.name)}</a></div>
      <div class="stars">${stars(p.rating)}</div>
      <div class="price">${rupee(p.price)}${p.mrp ? ` <span class="mrp">${rupee(p.mrp)}</span> <span class="off">${off}% off</span>` : ""}</div>
      <button class="add" data-id="${p.id}">Add to Cart</button>
    </div>`;
}

// "Add to Cart" buttons on any product card
document.addEventListener("click", e => {
  const b = e.target.closest(".add");
  if (!b) return;
  addToCart(b.dataset.id, 1);
  b.textContent = "Added ✓";
  setTimeout(() => (b.textContent = "Add to Cart"), 1000);
});

// ---- Header & footer ----
(function renderLayout() {
  const header = document.getElementById("site-header");
  if (header) {
    const options = `<option value="all">All</option>` +
      Object.entries(CATEGORIES).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join("");
    header.innerHTML = `
      <header class="header">
        <a href="index.html" class="logo">Shop<span>Nest</span></a>
        <a class="deliver" href="page.html?p=delivery"><small>Deliver to</small><strong>📍 Your location</strong></a>
        <form class="search" action="category.html" method="get">
          <select name="c" aria-label="Category">${options}</select>
          <input type="text" name="q" id="searchInput" placeholder="Search ShopNest" />
          <button type="submit" aria-label="Search">🔍</button>
        </form>
        <a class="hitem" href="page.html?p=account"><small>Hello, guest</small><strong>Account &amp; Lists</strong></a>
        <a class="hitem" href="page.html?p=returns"><small>Returns</small><strong>&amp; Orders</strong></a>
        <a class="cart" href="cart.html">🛒 <span id="cartCount">0</span> <strong>Cart</strong></a>
      </header>
      <nav class="subnav">
        <a href="page.html?p=all">☰ All</a>
        <a href="category.html?deals=1">Today's Deals</a>
        <a href="page.html?p=service">Customer Service</a>
        <a href="page.html?p=registry">Registry</a>
        <a href="page.html?p=giftcards">Gift Cards</a>
        <a href="page.html?p=sell">Sell</a>
      </nav>`;
    const input = document.getElementById("searchInput");
    if (input) input.value = params.get("q") || "";
    const sel = header.querySelector(".search select");
    const c = params.get("c");
    if (sel && c && [...sel.options].some(o => o.value === c)) sel.value = c;
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <button class="backtop" onclick="window.scrollTo({top:0,behavior:'smooth'})">Back to top</button>
      <footer class="footer">
        <div class="cols">
          <div><h4>Get to Know Us</h4><a href="page.html?p=about">About</a><a href="page.html?p=careers">Careers</a><a href="page.html?p=press">Press</a></div>
          <div><h4>Make Money with Us</h4><a href="page.html?p=sell">Sell products</a><a href="page.html?p=affiliate">Affiliate</a><a href="page.html?p=advertise">Advertise</a></div>
          <div><h4>Payment</h4><a href="page.html?p=cards">Cards</a><a href="page.html?p=upi">UPI</a><a href="page.html?p=emi">EMI</a></div>
          <div><h4>Let Us Help You</h4><a href="page.html?p=account">Your account</a><a href="page.html?p=returns">Returns</a><a href="page.html?p=help">Help</a></div>
        </div>
        <p class="copy">© 2026 ShopNest – a demo project for learning. Not affiliated with any real retailer.</p>
      </footer>`;
  }
  updateCartCount();
})();
