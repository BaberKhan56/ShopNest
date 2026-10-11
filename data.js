// Shared product data (emoji are used as placeholder images, so no external assets are needed)
const CATEGORIES = {
  electronics: "Electronics",
  gaming: "Gaming",
  home: "Home & Kitchen",
  fashion: "Fashion & Beauty",
  books: "Books",
  toys: "Toys & Sports"
};

// mrp (optional) = original price; products with an mrp appear on the Today's Deals page
const PRODUCTS = [
  // Electronics
  { id: 1,  emoji: "📱", name: "Smartphone 128GB, Dual SIM", category: "electronics", tags: ["Phones"], rating: 4.5, price: 14999, mrp: 17999, desc: "6.5-inch display, 128GB storage, dual SIM support and an all-day battery." },
  { id: 2,  emoji: "💻", name: "Lightweight Laptop 14\"", category: "electronics", tags: ["Laptops"], rating: 4.3, price: 42999, desc: "14-inch laptop with a fast SSD, backlit keyboard and 10-hour battery life." },
  { id: 3,  emoji: "🎧", name: "Wireless Noise-cancelling Headphones", category: "electronics", tags: ["Headsets"], rating: 4.6, price: 5499, mrp: 6999, desc: "Over-ear wireless headphones with active noise cancellation and 30-hour playback." },
  { id: 4,  emoji: "⌚", name: "Fitness Smartwatch", category: "electronics", tags: ["Wearables"], rating: 4.2, price: 2999, desc: "Tracks steps, heart rate and sleep, with a week-long battery and bright display." },
  { id: 5,  emoji: "📷", name: "Mirrorless Camera Kit", category: "electronics", tags: ["Cameras"], rating: 4.7, price: 38999, desc: "24MP mirrorless camera bundled with a versatile kit lens and carry bag." },
  { id: 6,  emoji: "🔊", name: "Portable Bluetooth Speaker", category: "electronics", tags: ["Audio"], rating: 4.4, price: 1799, mrp: 2499, desc: "Punchy bass in a compact, water-resistant body with 12 hours of playtime." },
  { id: 7,  emoji: "🖥️", name: "27\" 4K Monitor", category: "electronics", tags: ["Monitors"], rating: 4.5, price: 21999, mrp: 24999, desc: "27-inch 4K IPS monitor with slim bezels and HDMI / DisplayPort inputs." },
  { id: 8,  emoji: "🔋", name: "20000mAh Power Bank", category: "electronics", tags: ["Chargers"], rating: 4.3, price: 1299, desc: "High-capacity power bank with fast charging and dual USB output." },

  // Gaming
  { id: 9,  emoji: "🎧", name: "Surround Sound Gaming Headset", category: "gaming", tags: ["Headsets"], rating: 4.4, price: 2499, mrp: 3299, desc: "Comfortable over-ear headset with a detachable mic and virtual surround sound." },
  { id: 10, emoji: "⌨️", name: "Mechanical Gaming Keyboard", category: "gaming", tags: ["Keyboards"], rating: 4.5, price: 3299, desc: "Tactile mechanical switches, RGB backlighting and a sturdy aluminium frame." },
  { id: 11, emoji: "🖱️", name: "Wireless Gaming Mouse", category: "gaming", tags: ["Mice"], rating: 4.3, price: 1799, mrp: 2299, desc: "Lightweight wireless mouse with an adjustable high-precision sensor." },
  { id: 12, emoji: "🎮", name: "Wireless Game Controller", category: "gaming", tags: ["Controllers"], rating: 4.6, price: 2999, desc: "Ergonomic controller with responsive triggers, compatible with PC and consoles." },

  // Home & Kitchen
  { id: 13, emoji: "🛋️", name: "Cushioned Accent Armchair", category: "home", tags: ["Furniture"], rating: 4.2, price: 8999, mrp: 11999, desc: "Soft fabric armchair with solid wood legs, perfect for a reading corner." },
  { id: 14, emoji: "🍵", name: "Stainless Steel Tea Kettle", category: "home", tags: ["Kitchen"], rating: 4.4, price: 1199, desc: "1.5 litre electric kettle with auto shut-off and boil-dry protection." },
  { id: 15, emoji: "💡", name: "LED Desk Lamp with Dimmer", category: "home", tags: ["Lighting"], rating: 4.5, price: 899, mrp: 1299, desc: "Eye-friendly LED lamp with adjustable brightness and a flexible neck." },
  { id: 16, emoji: "🪴", name: "Ceramic Planter Set (3)", category: "home", tags: ["Decor"], rating: 4.3, price: 649, desc: "Three matching planters in different sizes, with drainage holes and saucers." },
  { id: 17, emoji: "🕯️", name: "Scented Candle Set", category: "home", tags: ["Decor"], rating: 4.5, price: 499, desc: "Set of four long-burning soy candles in calming fragrances." },
  { id: 18, emoji: "☕", name: "Ceramic Mug Set (6)", category: "home", tags: ["Kitchen"], rating: 4.7, price: 699, desc: "Six glazed ceramic mugs, microwave and dishwasher safe." },

  // Fashion & Beauty
  { id: 19, emoji: "👕", name: "Cotton Crew-neck T-shirt", category: "fashion", tags: ["Tops"], rating: 4.2, price: 499, mrp: 799, desc: "Soft, breathable 100% cotton tee with a relaxed everyday fit." },
  { id: 20, emoji: "👖", name: "Slim-fit Stretch Jeans", category: "fashion", tags: ["Bottoms"], rating: 4.1, price: 1299, mrp: 1899, desc: "Comfortable stretch denim with a modern slim fit." },
  { id: 21, emoji: "👟", name: "Cushioned Running Shoes", category: "fashion", tags: ["Shoes"], rating: 4.4, price: 2499, desc: "Lightweight running shoes with a breathable mesh upper and cushioned sole." },
  { id: 22, emoji: "🎒", name: "Water-resistant Backpack", category: "fashion", tags: ["Bags"], rating: 4.5, price: 1499, mrp: 1999, desc: "25 litre backpack with a padded laptop sleeve and multiple compartments." },
  { id: 23, emoji: "🧴", name: "Skincare Starter Kit", category: "fashion", tags: ["Beauty"], rating: 4.3, price: 899, desc: "Cleanser, moisturiser and sunscreen in a handy travel-friendly kit." },

  // Books
  { id: 24, emoji: "📘", name: "The Practical Programming Handbook", category: "books", tags: ["Tech"], rating: 4.6, price: 599, desc: "A hands-on introduction to writing clean, maintainable code." },
  { id: 25, emoji: "📚", name: "Bestselling Novel Box Set", category: "books", tags: ["Fiction"], rating: 4.8, price: 799, mrp: 1099, desc: "A collector's box set of three award-winning novels." },
  { id: 26, emoji: "📕", name: "Building Better Habits", category: "books", tags: ["Self-help"], rating: 4.4, price: 349, desc: "Simple, science-backed strategies for lasting everyday change." },
  { id: 27, emoji: "📗", name: "Illustrated Kids' Story Collection", category: "books", tags: ["Kids"], rating: 4.7, price: 449, desc: "Twenty colourful bedtime stories with beautiful illustrations." },

  // Toys & Sports
  { id: 28, emoji: "🧸", name: "Plush Toy Bundle", category: "toys", tags: ["Toys"], rating: 4.6, price: 599, desc: "Soft, huggable toys made from child-safe materials." },
  { id: 29, emoji: "🏏", name: "Cricket Bat – Kashmir Willow", category: "toys", tags: ["Sports"], rating: 4.1, price: 2299, mrp: 2799, desc: "Well-balanced Kashmir willow bat with a comfortable rubber grip." },
  { id: 30, emoji: "🧱", name: "Building Blocks Set (500 pcs)", category: "toys", tags: ["Toys"], rating: 4.7, price: 999, desc: "500 colourful interlocking blocks to spark creativity." }
];
