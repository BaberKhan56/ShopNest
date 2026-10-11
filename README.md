# ShopNest – E-commerce Storefront (Demo)

A multi-page, responsive e-commerce storefront built with plain HTML, CSS and JavaScript.
It uses a fictional brand and emoji placeholders – no frameworks, no build step, no external assets.

## Run
Open `index.html` in any browser. (Optional: `npx serve .` or VS Code "Live Server".)

## Pages (every link goes somewhere)
- `index.html` – home: hero carousel, category cards, product rows
- `category.html` – product listing; used for categories, tiles, search and deals
  - `?c=electronics` (category), `?t=Headsets` (tag), `?q=phone` (search), `?deals=1` (Today's Deals)
- `product.html?id=1` – product details, quantity, Add to Cart / Buy Now, related products
- `cart.html` – change quantities, remove items, subtotal
- `page.html?p=about` – info pages (about, careers, help, payment options, checkout, ...)

## Files
- `data.js` – product + category data (edit this to add products)
- `common.js` – shared header, footer, search and cart helpers
- `script.js` – home page logic (cards, rows, carousel)
- `styles.css` – all styling

## Notes
- The cart is saved in the browser with `localStorage`, so it persists between pages.
- Checkout, accounts and payments are intentionally not implemented (demo only).

## Ideas to extend
Real checkout flow, user accounts, a backend API/database, product images.
